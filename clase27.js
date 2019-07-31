const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
// const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id',1)}`

const opts = { crossDomain: true}

const onPeopleResponse = function(person){ 
    
    console.log(`Hola, yo soy ${person.name}`)
}


//vamos hacer una función le loge los datos de multiples personajes
// el dato unico de la url es el id así que ese será el parametro de la función

function obtenerPersonaje(id){
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
    $.get(url,opts,onPeopleResponse) // el reguest se generara en base a la url dada
}




function obtenerPrimeros(cuantos){
    var cuantos = cuantos + 1
    for(var i = 1 ; i < cuantos ; i++){
        obtenerPersonaje(i)  
    } 
}
//esto es asincronismo puro y duro

obtenerPrimeros(7)
