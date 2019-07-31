var camilo = {
    name: 'camilo',
    lastName: 'santana',
    age: 22
}
var antonio = {
    name: 'antonio',
    lastName: 'Lizcano',
    age: 26
}

function printNameAge (person){
    var { name } = person
    var { age } = person
    var message = `Hello I'm ${name.toUpperCase()} and I'm ${age} years old`
    console.log(message)
}
printNameAge(camilo)
printNameAge(antonio)


// function printName(persona){
//     // var name  = persona.name esta linea es equivalente a la de abajo
//     var { name} = persona
//     console.log(name.toUpperCase())
// }
// printName(cami)
// printName({name: 'cristina'})