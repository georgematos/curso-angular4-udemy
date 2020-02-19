import Veiculo from "./Veiculo"

export default class Moto extends Veiculo {

  constructor (modelo: string) {
    super(modelo)
  }

  // Override
  public acelerar(): void {
    this.velocidade += 20
  }

}
