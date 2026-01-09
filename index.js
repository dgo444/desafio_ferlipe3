class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome
    this.idade = idade
    this.tipo = tipo
  }

  atacar() {
    let ataque

    switch (this.tipo) {
      case "mago":
        ataque = "magia"
        break
      case "guerreiro":
        ataque = "espada"
        break
      case "monge":
        ataque = "artes marciais"
        break
      case "ninja":
        ataque = "shuriken"
        break
      default:
        ataque = "um ataque desconhecido"
    }

    console.log(`o ${this.tipo} atacou usando ${ataque}`)
  }
}

// Criando heróis
let heroi1 = new Heroi("Merlin", 150, "mago")
let heroi2 = new Heroi("Arthur", 35, "guerreiro")
let heroi3 = new Heroi("Lee", 40, "monge")
let heroi4 = new Heroi("Hanzo", 28, "ninja")

// Chamando o método atacar
heroi1.atacar()
heroi2.atacar()
heroi3.atacar()
heroi4.atacar()
