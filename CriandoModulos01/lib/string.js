const meuNome = "Gabriel";

function imprimeNome() {
  console.log(`Meu nome é ${meuNome}`);
}
// EXPORTAÇÃO IMEDIATA
export function caixaAlta(nome) {
 return nome.toUpperCase();
}
// EXPORTAÇÃO IMEDIATA

export function caixaBaixa(nome) {
  return nome.toLowerCase();
}

// EXPORTAÇÃO PORTERIOR DE VALORES
export {meuNome, imprimeNome};
