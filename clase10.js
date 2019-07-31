
var cami = {
    nombre: 'Camilo',
    apellido: 'Santana',
    edad: 15,  
}
var mayoria = 18
function mayoriaEdad(persona){
    if(persona.edad >= 18){
        console.log(`${persona.nombre} es mayor de edad`)
    }else{
        console.log(`${persona.nombre} tiene ${persona.edad} años
        \nle faltan ${ mayoria - persona.edad } años para ser mayor`)
    }
}
mayoriaEdad(cami)