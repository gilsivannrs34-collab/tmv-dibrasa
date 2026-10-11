// Service worker: permite abrir o app sem sinal.
// Ao publicar uma nova versão, aumente VERSAO para os celulares baixarem os arquivos novos.
const VERSAO = 'tmv-v4';
const ARQUIVOS = ['./', './index.html', './config.js', './manifest.json', './icons/icon-192.png', './icons/icon-512.png', './icons/logo.png'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(VERSAO).then((c) => c.addAll(ARQUIVOS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((ks) => Promise.all(ks.filter((k) => k !== VERSAO).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Só arquivos do próprio app (GET, mesma origem). Envio para a planilha nunca passa por aqui.
// Rede primeiro (pega atualização de config.js/index.html), cache se estiver sem sinal.
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  // sinal fraco na estrada: desiste da rede em 4 s e abre do cache
  const rede = Promise.race([fetch(req), new Promise((_, rej) => setTimeout(() => rej(new Error('timeout')), 4000))]);
  e.respondWith(
    rede
      .then((resp) => {
        const copia = resp.clone();
        caches.open(VERSAO).then((c) => c.put(req, copia));
        return resp;
      })
      .catch(() => caches.match(req, { ignoreSearch: true }).then((r) => r || caches.match('./index.html')))
  );
});
