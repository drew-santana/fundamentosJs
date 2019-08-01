const API_URL = 'https://swapi.co/api/'
const REFERENCE_URL = 'people/:id'
var id = prompt('Qué id quieres ?')
const PeopleURL = `${API_URL}${REFERENCE_URL.replace(':id',id)}` 
const opts = {crossDomain: true}
const onPeopleRespnse = function(data){ 
  console.log(`Hola, soy ${data.name} y mido ${data.height} centimetros`)
}
$.get(PeopleURL,opts,onPeopleRespnse)

