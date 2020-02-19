import DaoInterface from "./DaoInterface";
import Pessoa from "../Pessoa"

export default class PessoaDao implements DaoInterface<Pessoa> {

  nometabela: string = 'tb_pessoa';

  insert(obj: Pessoa): boolean {
    console.log("lógica de insert")
    return true;
  }
  update(obj: Pessoa): boolean {
    console.log("lógica de update")
    return true;
  }
  delete(id: number): Pessoa {
    console.log("lógica de delete", id)
    return new Pessoa("", "")
  }
  findById(id: number) {
    console.log("lógica de findById", id)
    return new Pessoa("", "")
  }
  findAll(): Pessoa[] {
    console.log("lógica de findAll")
    let pessoas: Array<Pessoa> = [new Pessoa("", ""), new Pessoa("", "")]
    return pessoas
  }

}
