/* 
     A) CRIE UM ARRAY DE OBJETOS CHAMADO > PESSOAS 
     B) FAÇA UMA FUNÇÃO QUE RECEBA UM ARRAY
     C) ITERE SOBRE O ARRAY DE PESSOAS E VERIFIQUE SE
          O ITEM SEXO == 'F' OU 'M'
     D) SE FOR IGUAL A 'F', INSIRA A PESSOA CORRENTE EM              UM ARRAY CHAMADO MENINAS, SE FOR 'M' INSIRA A            PESSOA EM UM ARRAY CHAMADO MENINOS
    E) FINALMENTE, IMPRIMA OS TRÊS ARRAYS

*/

const pessoas = [
     { nome: 'João', sexo: 'M'},
     { mome: 'Maria', sexo: 'F'},
     { nome: 'Pedro', sexo: 'M'},
     { nome: 'Ana', sexo: 'F'},
     { nome: 'Carlos', sexo: 'M'}
]
// console.log(pessoas[2].nome)
      const meninas = [] // VAZIO
      const meninos = [] // VAZIO

for (pessoa of pessoas){
      // if (pessoa.sexo === 'F'){
      //       meninas.push(pessoa);
      // } else if (pessoa.sexo === 'M') {
      //       meninos.push(pessoa);
      // }
          pessoa.sexo === "F" 
               ? meninas.push(pessoa)
               : meninos.push(pessoa);
}
console.log(" ---- Meninas ---- ");
console.log(meninas);
console.log(" ---- Meninos ---- ");
console.log(meninos);
