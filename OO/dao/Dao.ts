import DaoInterface from "./DaoInterface";

export default class Dao<T> implements DaoInterface<T> {

  nometabela: string = 'tb_pessoa';

  insert(obj: T): boolean {
    console.log("lógica de insert")
    return true;
  }
  update(obj: T): boolean {
    console.log("lógica de update")
    return true;
  }
  delete(id: number): T {
    console.log("lógica de delete", id)
    return Object()
  }
  findById(id: number) {
    console.log("lógica de findById", id)
    return Object()
  }
  findAll(): T[] {
    console.log("lógica de findAll")
    let objs: Array<T> = [Object(), Object()]
    return objs
  }

}
