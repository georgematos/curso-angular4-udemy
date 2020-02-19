import Veiculo from "./Veiculo";
import IConcessionaria from "./IConcessionaria";

export default class Concessionaria implements IConcessionaria {

  private endereco: string
  private listaDeVeiculos: Array<Veiculo>

  constructor(endereco: string, listaDeVeiculos: Array<Veiculo>) {
    this.endereco = endereco
    this.listaDeVeiculos = listaDeVeiculos
  }

  fornecerHorariosDeFuncionamento(): string[] {
    let horarios: Array<string> = ["08h00 às 12h00", "14h00 às 18h00"]
    return horarios
  }

  public fornecerEndereco(): string {
    return this.endereco
  }

  public mostrarListaDeVeiculos(): Array<Veiculo> {
    return this.listaDeVeiculos
  }

}
