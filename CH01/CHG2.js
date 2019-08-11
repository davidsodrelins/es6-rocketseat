//Exercicio 02 - copie e cole no main.js
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

const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];
   

//2.1 Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]
//funcao map
 const idades = usuarios.map((item)=>{
     return item.idade;
 })

console.log(`idades: ${idades}`);



//2.2 Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18
//anos: [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]

const usersRocketSeat = usuarios.filter((item)=>{
    return (item.idade>18 && item.empresa == 'Rocketseat')
})
console.log(usersRocketSeat);

//2.3 Utilizando o find Crie uma variável que procura por 
//um usuário que trabalhe na empresa Google: undefined
const userGoogle = usuarios.find((item)=>{
    return item.empresa == 'Google'
})
console.log(userGoogle);


//2.4 Unindo operações
//Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem
//no máximo 50 anos:

usuarios.map((item)=>{
    item.idade = item.idade*2;
})

const find50 = usuarios.filter((item)=>{
    return item.idade<=50;
})

console.log(find50);

 








