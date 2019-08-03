const API_URL = 'https://swapi.co/api/'//acceder al API
const PEOPLE_URL = 'people/:id'//acceder al id de la persona
const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id',1)}`
// .get nos permite hacer un reguest 
// .replace reemplaza una parte de un string
const opts = { crossDomain: true}
//indicar  al reguest que se va a realizar a otra pagina
const onPeopleResponse = function(person){ // luke es el parametro data del reguest
    console.log(arguments) // ver argumentos que llegan por reguest
    console.log(`Hola yo soy ${person.name}`)
}
$.get(lukeUrl,opts,onPeopleResponse)
//callbacks
// es una funcion que se va ejecutar en algun futuro
