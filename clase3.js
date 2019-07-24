var edad = 22
edad = edad+1
edad += 1
console.log(edad)
var peso = 60
peso -= 1
console.log(peso)
var pripra = 5
peso = peso += pripra
console.log(peso)
var precio = 300.3
// var total = precio * 3 
// quitar decimales con regla de tres
var total = precio * 100 * 3 / 100

var total2 = Math.round(precio * 100 * 3) / 100
console.log(total2)
// tener en cuenta un numero determinado de decimales
var totalStr = total2.toFixed(2)
console.log(totalStr)
// convertir string en decimales
var totalFloat = parseFloat(totalStr)
console.log(totalFloat)