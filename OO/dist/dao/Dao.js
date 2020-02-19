"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dao = /** @class */ (function () {
    function Dao() {
        this.nometabela = 'tb_pessoa';
    }
    Dao.prototype.insert = function (obj) {
        console.log("lógica de insert");
        return true;
    };
    Dao.prototype.update = function (obj) {
        console.log("lógica de update");
        return true;
    };
    Dao.prototype.delete = function (id) {
        console.log("lógica de delete", id);
        return Object();
    };
    Dao.prototype.findById = function (id) {
        console.log("lógica de findById", id);
        return Object();
    };
    Dao.prototype.findAll = function () {
        console.log("lógica de findAll");
        var objs = [Object(), Object()];
        return objs;
    };
    return Dao;
}());
exports.default = Dao;
