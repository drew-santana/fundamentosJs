// ecma script es el estandar en el cual se basa Js para conformarse como lenguaje
// soy facilidades del lenguaje
//
const PUNTAJE_PARA_GANAR = 320
class Jugador { // va a existir una clase Jugador que
    constructor(nickname,score){//va a tener un metotodo llamado constructor
        this.nickname = nickname
        this.score = score
    }
    saludar(){
        console.log(`soy ${this.nickname} y obtuve ${this.score}`)
    }
    jugar(){
        if(this.score >= 300){
            console.log(`${this.nickname} has ganado este Juego`)
        }else{
            console.log(`sigue intentandolo`)
        }
    }
}

class JugadorExperto extends Jugador {
    constructor(nickname, score,timeOfGame){
       super(nickname,score,timeOfGame)
    }
    saludar(){
        console.log(`Soy ${this.nickname} y soy un jugador Experto`)
    }
}
var jugador1 = new Jugador('ninjaJs','355')

