"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa_1 = __importDefault(require("../Pessoa"));
var PessoaDao = /** @class */ (function () {
    function PessoaDao() {
        this.nometabela = 'tb_pessoa';
    }
    PessoaDao.prototype.insert = function (obj) {
        console.log("lógica de insert");
        return true;
    };
    PessoaDao.prototype.update = function (obj) {
        console.log("lógica de update");
        return true;
    };
    PessoaDao.prototype.delete = function (id) {
        console.log("lógica de delete", id);
        return new Pessoa_1.default("", "");
    };
    PessoaDao.prototype.findById = function (id) {
        console.log("lógica de findById", id);
        return new Pessoa_1.default("", "");
    };
    PessoaDao.prototype.findAll = function () {
        console.log("lógica de findAll");
        var pessoas = [new Pessoa_1.default("", ""), new Pessoa_1.default("", "")];
        return pessoas;
    };
    return PessoaDao;
}());
exports.default = PessoaDao;
