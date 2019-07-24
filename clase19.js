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

const esMenor = ({edad}) => edad <= 16
const noAltos = ({altura})  => altura <= 1.7

var equipo = [camilo,antonio,ahmed,luisa,pablo,orlando,sofia]
var losCarneDebil = equipo.filter(noAltos,esMenor)

const darPosicionSecreta = debilucho => ({
    ...debilucho,
        fuerza: debilucho.fuerza + 100,
        rapidez: debilucho.rapidez + 150
     
})

var losSuperPros = losCarneDebil.map(darPosicionSecreta)




// const pasarAlturaCms = persona => {
//     //crear un nuevo objeto modificando el key altura
//     return {
//         ...persona,
//         altura: persona.altura * 100
// }
// }
// const pasarAlturaCms2 = persona => ({
//     ...persona,
//     altura: persona.altura * 100
// })



// var personas = [camilo,antonio,ahmed,luisa]
// var personarCms = personas.map(pasarAlturaCms2)
// console.log(personarCms)