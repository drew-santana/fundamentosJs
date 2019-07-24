// HERENCIA ENTRE CLASES

// La herencia como tal no existe en JS, no hay clases, hay prototipos
//Js no soporta como tal la herencia entre clases porque a lo que
// se le conoce como clases en realidad es un prototipos
// lo que sí existe es la herencia protitipal y ¿cómo funciona esto?
// crar un prototipo hijo de persona que va a ser un subtipo del mismo
//este se llamará Desarrollador e intentaŕa si sabe responder al prototipo padre
//si no lo encuentra buscará padre por padre hasta al prototipo base de todos los objetos se es OBJECT


//MANERA DE HEREDAR 
// se escribe una función propia
function heredarDe(prototipoHijo, prototipoPadre){
    var noop = function (){}
    noop.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new noop
    prototipoHijo.prototype.constructor = prototipoHijo
}
// El método constructor es un metodo especial para crear e inicializar un objeto creado apartir de una clase.


function heredaDe(prototipoHijo, prototipoPadre){//le diremos al prototipo hijo quién va a ser su prototipo padre
    var fn = function(){} // se define una función vacia el estandar es fn o noop (not operative)
    fn.prototype = prototipoPadre.prototype // asignar al prototipo de la función vacia el prototype de la función/prototipo padre
    // todas las funciones tiene n el atributo protype
    prototipoHijo.prototype = new fn// asignar al prototype del hijo un nuevo objeto del prototipo de la función vacia
    prototipoHijo.prototype.constructor = prototipoHijo//asignar la función constructora al prototipo hijo 
}

// PROTOTYPE : es un atributo que tienen todas las funciónes que nos indica que metodos entiende, que atributos tiene
// y cuál es el constructor, adicional a eso tiene un atributo __proto__ que apunta al prototipo que tiene como padre
// si el padre tiene algun metodo con el que no cuente el hijo estos se le heredaran directamente 
// y si el hijo tiene un metodo que se llame igual a un metodo del padre, dependera del cosntructor para saber cual de los dos se ejecuta



// esta función deberá ser invocada justo antes de cada cambio de herencia


function Jugador(nickname,score){
    this.nickname = nickname
    this.score = score
}

var jugador1 = new Jugador('ninjaJs','355')
const PUNTAJE_PARA_GANAR = 320

Jugador.prototype.saludar = function (){
    console.log(`soy ${this.nickname} y obtuve ${this.score}`)
}


Jugador.prototype.jugar = function(){
    if(this.score >= PUNTAJE_PARA_GANAR){
        console.log(`Soy ${this.nickname} y gané este juego con ${this.score}pts`)
    }else{
        console.log(`sigue intentando ${this.nickname}`)
    }
}
jugador1.jugar()

//CREAR SUBTIPO
//    es justo aquí donde vamos a querer llamar la función de cambio de herencia
heredaDe(JugadorExperto, Jugador )
function JugadorExperto(nombre, score){
    this.nombre = nombre
    this.score = score
}
JugadorExperto.prototype.jugar = function(){
    console.log(`Soy ${this.nombre} y soy un Jugador Experto`)
}

function Desarrollador(nombre, score){
    this.nombre = nombre
    this.score = score
}

//INTENTAR USAR METODO DEL PROTOTIPO PADRE
// pisando el metodo por uno propio

Desarrollador.prototype.jugar = function (){
    
}
// CÓMO HEREDAR LOS METODOS EL PROTOTIPO PADRE ??
// ESTA ES LA MANERA DIFICIL DE HACERLO
