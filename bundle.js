"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//Exercicio 02 - copie e cole no main.js
var Usuario =
/*#__PURE__*/
function () {
  //criação da classe Usuario
  function Usuario(email, senha) {
    _classCallCheck(this, Usuario);

    //método construtor recebe email e senha
    this.email = email; //atribuição do paramento da classe ao da função

    this.email = senha;
  }

  _createClass(Usuario, [{
    key: "isAdmin",
    value: function isAdmin() {
      // método que verifica se o usuário é um admin
      return this.admin === true; // retorno true caso o admin seja true
    }
  }]);

  return Usuario;
}();

var Admin =
/*#__PURE__*/
function (_Usuario) {
  _inherits(Admin, _Usuario);

  // classe admin herda de usuario
  function Admin(email, senha) {
    var _this;

    _classCallCheck(this, Admin);

    // construtor de admin tbm recebe email e senha
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Admin).call(this, email, senha)); //super para pegar os atributos e métodos da classe pai

    _this.admin = true; //parametro de admin é true pois o é um Admin

    return _this;
  }

  return Admin;
}(Usuario);

var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}]; //2.1 Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]
//funcao map

var idades = usuarios.map(function (item) {
  return item.idade;
});
console.log("idades: ".concat(idades)); //2.2 Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18
//anos: [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]

var usersRocketSeat = usuarios.filter(function (item) {
  return item.idade > 18 && item.empresa == 'Rocketseat';
});
console.log(usersRocketSeat); //2.3 Utilizando o find Crie uma variável que procura por 
//um usuário que trabalhe na empresa Google: undefined

var userGoogle = usuarios.find(function (item) {
  return item.empresa == 'Google';
});
console.log(userGoogle); //2.4 Unindo operações
//Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem
//no máximo 50 anos:

usuarios.map(function (item) {
  item.idade = item.idade * 2;
});
var find50 = usuarios.filter(function (item) {
  return item.idade <= 50;
});
console.log(find50);
