"use strict";

/*

Utilize a sintaxe curta de objetos (Object Short Syntax) no seguinte objeto:
const usuario = 'Diego';
const idade = 23;

const usuario = {
    nome: nome,
    idade: idade,
    cidade: 'Rio do Sul',
   };
*/
var nome = 'Diego';
var idade = 23;
var usuario = {
  nome: nome,
  idade: idade,
  cidade: 'Rio do Sul'
};
console.log("O usu\xE1rio ".concat(nome, " possui ").concat(idade, "  anos e mora em ").concat(usuario.cidade));
