
// STRINGS

var name = "Camilo" , lastname = 'Santana'
var nameUppercase = name.toUpperCase()
console.log(nameUppercase)
var nameLower = name.toLowerCase()
console.log(nameLower)
var firstChar = lastname.charAt(0)
console.log('hello Mr. ' + name + ' ' + firstChar)
var chartLength = name.length
console.log(chartLength)
var interpolatedText = `hello ${name.toUpperCase()} your name have ${chartLength} charters !`
console.log(interpolatedText)
//  obteneer caracteres especificos
var subString = name.substr(1,2)
console.log(subString)
// obtener ultima letra de un string
var LastChart = name.charAt(name.length -1)
console.log(LastChart)