var name = 'camilo'

// function printNameUpper(){
//     name = name.toLocaleUpperCase()
//     console.log(name)
// }
// printNameUpper()


// SIN SIDE EFFECT

function printName(name){
    name = name.toLocaleUpperCase()
    console.log(name)
}
printName(name)