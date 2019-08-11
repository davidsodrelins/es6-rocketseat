"use strict";

//3º exercício
//Converta as funções nos seguintes trechos de código em Arrow Functions:

/* 3.1
const arr = [1, 2, 3, 4, 5];
arr.map(function(item) {
 return item + 10;
});

*/
// 3.1
var arr = [1, 2, 3, 4, 5];
console.log(arr);
var newArr = arr.map(function (item) {
  return item + 10;
});
console.log(newArr);
/*
// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };
function mostraIdade(usuario) {
 return usuario.idade;
}
mostraIdade(usuario);

*/

var usuario = {
  nome: 'Diego',
  idade: 23
};

function mostraIdade(usuario) {
  return usuario.idade;
}

var user = function user() {
  return mostraIdade(usuario);
};

console.log(user());
/*
// 3.3
// Dica: Utilize uma constante pra function
const nome = "Diego";
const idade = 23;
function mostraUsuario(nome = 'Diego', idade = 18) {
 return { nome, idade };
}
mostraUsuario(nome, idade);
mostraUsuario(nome);
 */

var nome = "Diego";
var idade = 23;

function mostraUsuario() {
  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Diego';
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  return {
    nome: nome,
    idade: idade
  };
}

var showName = function showName() {
  return mostraUsuario(nome, idade);
};

var showNameAge = function showNameAge() {
  return mostraUsuario(nome, idade).nome;
};

console.log(showName());
console.log(showNameAge());
/**
 * // 3.4
const promise = function() {
 return new Promise(function(resolve, reject) {
 return resolve();
 })
}

 */

var promise = function promise() {
  return new Promise(function (resolve, reject) {
    return resolve();
  });
};

console.log(promise());
