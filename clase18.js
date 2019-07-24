var camilo = {
    nombre: 'Camilo',
    apellido: 'Santana',
    altura: 1.70,
    edad: 16
}
var antonio = {
    nombre: 'Antonio',
    apellido: 'Santana',
    altura: 1.54,
    edad: 17
}
var ahmed = {
    nombre: 'Ahmed',
    apellido: 'Reyes',
    altura: 1.86,
    edad: 15
}
var pablo = {
    nombre: 'Pablo',
    apellido: 'Gonzalez',
    altura: 1.65,
    edad: 16
}
var orlando = {
    nombre: 'Orlando',
    apellido: 'Murcia',
    altura: 1.62,
    edad: 15
}
var luisa = {
    nombre: 'Luisa',
    apellido: 'Reyes',
    altura: 1.65,
    edad: 16
}
var sofia = {
    nombre: 'Sofia',
    apellido: 'Gomez',
    altura: 1.85,
    edad: 17
}

const esMenor = ({edad}) => edad <= 16

const noAlta = ({altura})  => altura <= 1.7

var personas = [camilo,antonio,ahmed,luisa,pablo,orlando,sofia]
function listaEquipoGanador (personas){

    var altos = personas.filter(noAlta,esMenor)

    console.log('ESTE ES TU EQUIPO GANADOR: ')

    for(var i = 0 ; i < altos.length; i++){

        var persona = altos[i] 
        
        console.log(`${persona.nombre} mide ${persona.altura} mts`)
    
    }
}
listaEquipoGanador(personas)