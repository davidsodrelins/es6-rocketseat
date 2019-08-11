//3º exercício
//Converta as funções nos seguintes trechos de código em Arrow Functions:

/* 3.1
const arr = [1, 2, 3, 4, 5];
arr.map(function(item) {
 return item + 10;
});

*/

// 3.1
const arr = [1, 2, 3, 4, 5];
console.log(arr);

const newArr = arr.map(item => item + 10);
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

const usuario = { nome: 'Diego', idade: 23 };


function mostraIdade(usuario) {
    return usuario.idade;
}

const user = () => (mostraIdade(usuario))

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

const nome = "Diego";
const idade = 23;

function mostraUsuario(nome = 'Diego', idade = 18) {
    return { nome, idade };
}

const showName = () => mostraUsuario(nome,idade);
const  showNameAge = () => mostraUsuario(nome,idade).nome;

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

const promise = () => new Promise((resolve, reject) => resolve ())

console.log(promise());
