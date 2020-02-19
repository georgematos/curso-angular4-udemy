"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, carroPreferido) {
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }
    Pessoa.prototype.dizerNome = function () {
        return this.nome;
    };
    Pessoa.prototype.dizerVeiculoPreferido = function () {
        return this.carroPreferido;
    };
    Pessoa.prototype.comprarVeiculo = function (carro) {
        this.veiculo = carro;
    };
    Pessoa.prototype.dizerVeiculoQueTem = function () {
        return this.veiculo;
    };
    return Pessoa;
}());
exports.default = Pessoa;
