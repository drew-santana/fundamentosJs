
class Nadador{
  constructor(nombre,peso,altura){
    this.nombre = nombre
    this.peso=peso
    this.altura=altura
  }
  saludar(nombre){
    var {nombre} = this
    console.log(`Hola, soy ${nombre}`)
  }
}
var nadador1 = new Nadador('camio',55,1.73)
class SalvaVidas extends Nadador{
  constructor(nombre,peso,altura,resP){
    super(nombre,peso,altura,resP)
  }
  saludar(nombre){
    var {nombre}=this
    console.log(`Hola, ${nombre} y soy tu sexy Salva vidas`)
  }
}

var salvaVidas1 = new SalvaVidas('Vanessa',52,1.68)

nadador1.saludar()
salvaVidas1.saludar()