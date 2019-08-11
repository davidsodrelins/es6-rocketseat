//Exercicio 01 - copie e cole no main.js
class Usuario{ //criação da classe Usuario
    constructor (email, senha){ //método construtor recebe email e senha
        this.email = email; //atribuição do paramento da classe ao da função
        this.email = senha; 
    }

    isAdmin(){ // método que verifica se o usuário é um admin
        return this.admin ===true; // retorno true caso o admin seja true
    }
}

class Admin extends Usuario{ // classe admin herda de usuario
    constructor(email, senha){ // construtor de admin tbm recebe email e senha
        super(email, senha); //super para pegar os atributos e métodos da classe pai
        this.admin = true; //parametro de admin é true pois o é um Admin
    }
}

const User1 = new Usuario('email@teste.com', 'senha123'); // instancia de usuario
const Adm1 = new Admin('email@teste.com', 'senha123'); // instancia de admin

console.log(User1.isAdmin()); //retorna se o usuario é admin - false
console.log(Adm1.isAdmin()) ; //retorna se o admin é admin = true