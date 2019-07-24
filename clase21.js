


function jugador(nickname,score){
    this.nickname = nickname
    this.score = score
}

var jugador1 = new jugador('ninjaJs','355')
const PUNTAJE_PARA_GANAR = 320


jugador 

jugador.prototype.jugar = function(){
    if(this.score >= PUNTAJE_PARA_GANAR){
        console.log(`Soy ${this.nickname} y gané este juego con ${this.score}pts`)
    }else{
        console.log(`sigue intentando ${this.nickname}`)
    }
}
jugador1.jugar()


//definir prototipo
// 1. definir una función
//2. crear prototype de objeto
//3. crear objeto 
//4 utilizar prototipo para crear funciones que interactuan con el objeto
function persona2(nombre, apellido,altura){//parametros que requiere un prototipo para ser creado, parametros iniciales

        //ESTRUCTURA CONSTRUCTORA

     this.nombre = nombre           //con this. se hace referecia a cada uno de los key del objeto a crear 
     this.apellido =  apellido 
     this.altura = altura         //instrucción que se ejecuta al invocar el prototipo
     // el return es implicito 


}

var camilo = new persona2('camilo', 'santana', 1.2) 


persona2.prototype.saludar = function (){
    console.log(`Hola me llamado ${this.nombre} ${this.apellido}`)
}

camilo.saludar()

persona2.prototype.soyAlto = function (){
    if(this.altura >= 1.8){
        console.log(`Soy alto porque mido ${this.altura} mts`)
    }else{
        console.log(`no soy alto porque mido ${this.altura}`)
    }
}
camilo.soyAlto()


//cuando hablamos de obejtos en Js estamos hablando de prototipos y no tanto de clases
// definir un prototipo 
// lo primero es definir una funcion y luego ponemos los parametros que va a requerir
// iniciarlizar o crear una nueva persona
// esta función es la que se va a ejecutar cuando creemos una nueva persona
// clase constructora

// la palabra es new es una palabra reservaba que se utiliza para crear nuevos objetos 
// dado un prototipo, en este caso el prototipo es persona
    // var camilo = new persona()
// la palabra new seguida del prototipo permite crear un nuevo objeto y a ese objeto se le va
// a asignar como prototipo el prototipo indicado
// luego se ejecuta la función construtora que lleva por nombre el prototipo
// e implicitamente se retorna el objeto que se acaba de construir

// comencemos pasandole parametros al prototipo

// luego dentro de la función se reciben los parametros