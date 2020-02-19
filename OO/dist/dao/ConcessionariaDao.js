"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria_1 = __importDefault(require("../Concessionaria"));
var ConcessionariaDao = /** @class */ (function () {
    function ConcessionariaDao() {
        this.nometabela = 'tb_concessionaria';
    }
    ConcessionariaDao.prototype.insert = function (obj) {
        console.log("lógica de insert");
        return true;
    };
    ConcessionariaDao.prototype.update = function (obj) {
        console.log("lógica de update");
        return true;
    };
    ConcessionariaDao.prototype.delete = function (id) {
        console.log("lógica de delete", id);
        return new Concessionaria_1.default("", []);
    };
    ConcessionariaDao.prototype.findById = function (id) {
        console.log("lógica de findById", id);
        return new Concessionaria_1.default("", []);
    };
    ConcessionariaDao.prototype.findAll = function () {
        console.log("lógica de findAll");
        var concessionarias = [new Concessionaria_1.default("", []), new Concessionaria_1.default("", [])];
        return concessionarias;
    };
    return ConcessionariaDao;
}());
exports.default = ConcessionariaDao;
