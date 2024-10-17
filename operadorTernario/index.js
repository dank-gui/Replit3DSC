//OPERADOR TERNÁRIO
//SÃO USADOS PARA SIMPLIFICAR O PROCESSO DE TOMADA DE DECISÃO E, EVENTUALMNETE, SUBSTITUIR IF/ELSE

const idade = 18;

if (idade >= 18){
  console.log("Permitida a entrada");
} else {
  console.log("Proibida para menores");
}
//COM OPERADOR TERNÁRIO
const passe = idade >= 18 ? "Permitida a entrada" : "Proibida a entrada"
console.log(passe)