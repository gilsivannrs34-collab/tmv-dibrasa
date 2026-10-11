// ============================================================
//  CONFIGURAÇÃO DO APP TMV — edite só este arquivo
// ============================================================
window.TMV_CONFIG = {
  // URL do App da Web do Apps Script (termina em /exec)
  ENDPOINT: 'https://script.google.com/macros/s/AKfycbzI7YSlZz9L3AETIIbwkqZ2cSQA6OGk2aF35nMqoUVOP58vSJFXpjY4mW6VMTtYZN9C5w/exec',

  // Mesma APP_KEY da aba Config da planilha
  APP_KEY: '8e4f8e5888df45ca',

  // Nome da filial do piloto (aparece em cada evento)
  FILIAL: 'AMBEV DIBRASA SANTA INÊS',

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
