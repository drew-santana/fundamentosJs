// asignación en memoria
var x = 5
var y = '5'

// igualdad

x == y //true

//igualdad estricta

x === y //false

// desigualdad

x != y //false

//desigualdad estricta

x !== y //true

//comparación de objetos funciona con espacio asignado en memoria en memoria

var xx ={
    numero: 2
}

var yy = xx

xx === yy // true

// desglose de un objeto  para crear uno nuevo con otro espacio en memoria
var yyy = {
    ...xx 
}

xx === yyy //false

