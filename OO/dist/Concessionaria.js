"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria = /** @class */ (function () {
    function Concessionaria(endereco, listaDeVeiculos) {
        this.endereco = endereco;
        this.listaDeVeiculos = listaDeVeiculos;
    }
    Concessionaria.prototype.fornecerHorariosDeFuncionamento = function () {
        var horarios = ["08h00 às 12h00", "14h00 às 18h00"];
        return horarios;
    };
    Concessionaria.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.mostrarListaDeVeiculos = function () {
        return this.listaDeVeiculos;
    };
    return Concessionaria;
}());
exports.default = Concessionaria;
