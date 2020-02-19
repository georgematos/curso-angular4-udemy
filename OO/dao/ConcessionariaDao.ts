import DaoInterface from "./DaoInterface";
import Concessionaria from "../Concessionaria"

export default class ConcessionariaDao implements DaoInterface<Concessionaria> {

  nometabela: string = 'tb_concessionaria';

  insert(obj: Concessionaria): boolean {
    console.log("lógica de insert")
    return true;
  }
  update(obj: Concessionaria): boolean {
    console.log("lógica de update")
    return true;
  }
  delete(id: number): Concessionaria {
    console.log("lógica de delete", id)
    return new Concessionaria("", [])
  }
  findById(id: number) {
    console.log("lógica de findById", id)
    return new Concessionaria("", [])
  }
  findAll(): Concessionaria[] {
    console.log("lógica de findAll")
    let concessionarias: Array<Concessionaria> = [new Concessionaria("", []), new Concessionaria("", [])]
    return concessionarias
  }

}
