export default interface DaoInterface<T> {

  nometabela: string

  insert(obj: T): boolean
  update(obj: T): boolean
  delete(id: number): T
  findById(id: number): T
  findAll(): Array<T>

}
