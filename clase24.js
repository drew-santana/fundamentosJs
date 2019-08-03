const PUNTAJE_PARA_GANAR = 350
class Jugador { // va a existir una clase Jugador que
    constructor(nickname,score){//va a tener un metotodo llamado constructor
        this.nickname = nickname
        this.score = score
    }
    saludar(fn){ // talvez llegue o talvez no
        //para no tener que colocar siempre this se destructura el objeto this
        var { nickname, score } = this
        console.log(`soy ${nickname} y obtuve ${score}`)
        if(fn){//preguntar si el parametro llegó
            // hay valores que al ser puesto dentro de un if y evaluados como una condicion tan true o false
            // null 0 false y un string vacio siempre van a  ser false
            // un objeto {} un string 1 serán verdadero
            fn(nickname,score)
        }
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
    constructor(nickname, score){
       super(nickname,score)
    }
    saludar(fn){
        var { nickname, score } = this
        console.log(`Soy ${this.nickname} y soy un jugador Experto`)
        if(fn){
            fn(nickname,score ) // se le coloca true en el tercer parametro porque si es un jugador experto

        }
    }
}

function calificar (nombre,puntaje){
    if(puntaje >= PUNTAJE_PARA_GANAR){
        console.log(`Hola ${nombre},  Gracias por ser un Jugador Experto !`)
    }else{
        console.log(`Hola ${nombre}, gracias por jugar`)
    }
}
var jugador1 = new Jugador('ninjaJs',349)
var xjugador1 = new JugadorExperto('santoX', 509)

jugador1.saludar(calificar)
xjugador1.saludar(calificar)