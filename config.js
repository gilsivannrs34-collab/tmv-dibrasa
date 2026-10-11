// ============================================================
//  CONFIGURAÇÃO DO APP TMV — edite só este arquivo
// ============================================================
window.TMV_CONFIG = {
  // URL do App da Web do Apps Script (termina em /exec)
  ENDPOINT: 'COLE_AQUI_A_URL_DO_APPS_SCRIPT',

  // Mesma APP_KEY da aba Config da planilha
  APP_KEY: 'COLE_AQUI_A_APP_KEY',

  // Nome da filial do piloto (aparece em cada evento)
  FILIAL: 'EDITAR',

  // Capturar GPS em cada toque (o celular pede permissão uma vez)
  GPS: true,

  // Usado só se o celular nunca conseguiu baixar o Cadastro da planilha.
  // A lista oficial fica na aba Cadastro: editou lá, o app atualiza sozinho.
  CADASTRO_PADRAO: {
    motoristas: [],
    placas: [],
    fabricas: [],
    motivos: ['Pneu', 'Mecânica', 'Fiscalização / Posto', 'Trânsito / Obra', 'Abastecimento',
              'Descanso obrigatório', 'Chuva', 'Outro']
  }
};
