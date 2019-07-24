
var cami = {
    nombre: 'Camilo',
    apellido: 'Santana',
    edad: 19,
}
var luisa = {
    nombre: 'Luisa',
    apellido: 'Reyes',
    edad: 15,
}
const MAYORIA_EDAD = 18


const esMenor = ({edad}) => edad <= MAYORIA_EDAD

function permitirAcceso(persona){
    if(!esMenor(persona)){
        console.log(`Bienvenido señor ${persona.nombre}`)
    }else{
        console.log(`ACCESO DENEGADO`)
    }
}    
permitirAcceso(cami)
permitirAcceso(luisa)

// function esMayorDeEdad(persona){
//     return persona.edad >= MAYORIA_EDAD // retorna true o false
// }

//PASO 1 ASIGNAR FUNCTION A CONSTANTE
// const esMayorDeEdad = function (persona) {
//     return persona.edad >= MAYORIA_EDAD
// }
//PASO 2 CREAR ARROW FUNCTION