var camilo = {
    nombre: 'Camilo',
    apellido: 'Santana',
    edad: 22
}
var antonio = {
    nombre: 'Antonio',
    apellido: 'Lizcano',
    edad: 26
}

function masEdad1(persona){
    persona.edad += 1
    var mensaje = `ahora ${persona.nombre} tiene ${persona.edad} para SIEMPRE`
    console.log(mensaje)
}
function masEdad2(edad){
    edad += 1 
    var mensaje = `tines ${edad} años solo por este momento`
    console.log(mensaje)
}

function masEdad3(persona){
    return {
        ...persona, 
        edad: persona.edad + 1
    
    }
}

var camilo2 = masEdad3(camilo)