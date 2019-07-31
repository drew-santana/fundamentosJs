var camilo = {
    nombre: 'Camilo',
    apellido: 'Santana',
    altura: 1.73
}
var antonio = {
    nombre: 'Antonio',
    apellido: 'Santana',
    altura: 1.74
}
var ahmed = {
    nombre: 'Ahmed',
    apellido: 'Reyes',
    altura: 1.76
}
var luisa = {
    nombre: 'Luisa',
    apellido: 'Reyes',
    altura: 1.65
}

var personas = [camilo,antonio,ahmed,luisa]

for(var i = 0 ; i < personas.length; i++){

    //variable que identifica a cada persona
    // dentro del arreglo 
    var persona = personas[i] 
    

    console.log(`${persona.nombre} mide ${persona.altura} mts`)

}









// var personas = [camilo,antonio,ahmed,luisa]

// for (var i = 0; i < personas.length ; i++){
//     var persona = personas[i]

//     console.log(`${persona.nombre} ${persona.apellido} mide ${persona.altura} mts`)
// }