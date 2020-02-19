import Carro from "./Carro";
import Pessoa from "./Pessoa";
import Concessionaria from "./Concessionaria";
import Moto from "./Moto";
import Veiculo from "./Veiculo";
import IConcessionaria from "./IConcessionaria";
import ConcessionariaDao from "./dao/ConcessionariaDao";
import Dao from "./dao/Dao"

let carroA = new Carro("Gol", 4)
let carroB = new Carro("Onix", 4)
let carroC = new Carro("Logan", 4)

let carros: Array<Carro> = [carroA, carroB, carroC]

let concessionaria = new Concessionaria("Av. Carneiro de Mendonça", carros)

concessionaria.mostrarListaDeVeiculos().forEach(x => console.log(x))

let cliente = new Pessoa("George", "Gol")

concessionaria.mostrarListaDeVeiculos().map(veiculo => {
  if (veiculo['modelo'] == cliente.dizerVeiculoPreferido()) {
    cliente.comprarVeiculo(veiculo)
  }
})

console.log(cliente.dizerVeiculoQueTem())

let carro = new Carro("Veloster", 3)
let moto = new Moto("XRE 190")

carro.acelerar()
moto.acelerar()

let veiculos: Array<Veiculo> = [carro, moto]

veiculos.forEach(x => console.log(x))

let concessionaria2: IConcessionaria = new Concessionaria("Rua Bentivi, 939", carros)

console.log(concessionaria2.fornecerHorariosDeFuncionamento())

let daoConcessionaria: ConcessionariaDao = new ConcessionariaDao()

let concessionaria3: Concessionaria = new Concessionaria("Rua Bentevi", carros)
daoConcessionaria.insert(concessionaria3)

let dao: Dao<Concessionaria> = new Dao()

dao.insert(concessionaria3)
