import Veiculo from "./Veiculo"

export default class Pessoa {

  private nome: string
  private carroPreferido: string
  private veiculo!: Veiculo;

  constructor(nome: string, carroPreferido: string) {
    this.nome = nome
    this.carroPreferido = carroPreferido
  }

  public dizerNome(): string {
    return this.nome
  }

  public dizerVeiculoPreferido(): string {
    return this.carroPreferido
  }

  public comprarVeiculo(carro: Veiculo): void {
    this.veiculo = carro
  }

  public dizerVeiculoQueTem(): Veiculo {
    return this.veiculo
  }

}
