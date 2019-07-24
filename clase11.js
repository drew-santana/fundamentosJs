
var cami = {
    nombre: 'Camilo',
    apellido: 'Santana',
    edad: 15,  
}
const MAYORIA_EDAD = 18

function esMayorDeEdad(persona){
    return persona.edad >= MAYORIA_EDAD // retorna true o false
}
function mayoriaEdad(persona){
    if(esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    }else{
        console.log(`${persona.nombre} tiene ${persona.edad} años
        \nle faltan ${ MAYORIA_EDAD - persona.edad } años para ser mayor`)
    }
}
mayoriaEdad(cami)