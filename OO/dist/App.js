"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var Moto_1 = __importDefault(require("./Moto"));
var ConcessionariaDao_1 = __importDefault(require("./dao/ConcessionariaDao"));
var Dao_1 = __importDefault(require("./dao/Dao"));
var carroA = new Carro_1.default("Gol", 4);
var carroB = new Carro_1.default("Onix", 4);
var carroC = new Carro_1.default("Logan", 4);
var carros = [carroA, carroB, carroC];
var concessionaria = new Concessionaria_1.default("Av. Carneiro de Mendonça", carros);
concessionaria.mostrarListaDeVeiculos().forEach(function (x) { return console.log(x); });
var cliente = new Pessoa_1.default("George", "Gol");
concessionaria.mostrarListaDeVeiculos().map(function (veiculo) {
    if (veiculo['modelo'] == cliente.dizerVeiculoPreferido()) {
        cliente.comprarVeiculo(veiculo);
    }
});
console.log(cliente.dizerVeiculoQueTem());
var carro = new Carro_1.default("Veloster", 3);
var moto = new Moto_1.default("XRE 190");
carro.acelerar();
moto.acelerar();
var veiculos = [carro, moto];
veiculos.forEach(function (x) { return console.log(x); });
var concessionaria2 = new Concessionaria_1.default("Rua Bentivi, 939", carros);
console.log(concessionaria2.fornecerHorariosDeFuncionamento());
var daoConcessionaria = new ConcessionariaDao_1.default();
var concessionaria3 = new Concessionaria_1.default("Rua Bentevi", carros);
daoConcessionaria.insert(concessionaria3);
var dao = new Dao_1.default();
dao.insert(concessionaria3);
