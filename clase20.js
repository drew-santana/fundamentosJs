//reducir un array a un valor unico

var camilo = {
    nombre: 'Camilo',
    apellido: 'Santana',
    fuerza: 30,
    rapidez: 77,
    altura: 1.70,
    edad: 16
}
var antonio = {
    nombre: 'Antonio',
    apellido: 'Santana',
    fuerza: 20,
    rapidez: 120,
    altura: 1.54,
    edad: 17
}
var ahmed = {
    nombre: 'Ahmed',
    apellido: 'Reyes',
    fuerza: 60,
    rapidez: 90,
    altura: 1.86,
    edad: 15
}
var pablo = {
    nombre: 'Pablo',
    apellido: 'Gonzalez',
    fuerza: 74,
    rapidez: 50,
    altura: 1.65,
    edad: 16
}
var orlando = {
    nombre: 'Orlando',
    apellido: 'Murcia',
    fuerza: 20,
    rapidez: 150,
    altura: 1.62,
    edad: 15
}
var luisa = {
    nombre: 'Luisa',
    apellido: 'Reyes',
    fuerza: 80,
    rapidez: 63,
    altura: 1.65,
    edad: 16
}
var sofia = {
    nombre: 'Sofia',
    apellido: 'Gomez',
    fuerza: 55,
    rapidez: 86,
    altura: 1.85,
    edad: 17
}

var equipo = [camilo,antonio,ahmed,luisa,pablo,orlando,sofia]


const sumarEdades = (acumulado, jugador) => acumulado + jugador.edad

var totalEdades = equipo.reduce(sumarEdades, 0)



var promedioEdades = totalEdades / equipo.length

console.log(`la suma total de las edades es de ${totalEdades}`)
console.log(`tus jugadores promedian una edad de ${promedioEdades}`)


// const reducer = (acum, {fuerza}) => acum + fuerza


// var totalFuerza = equipo.reduce(reducer, 0)

// var  totalLibros = 0 

// for(var i = 0; i < equipo.length;i++){
//     totalLibros = totalLibros + equipo[i].fuerza

// }
