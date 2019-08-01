const API_URL = 'https://swapi.co/api/'
const REFERENCE_URL = 'people/:id'
 
const opts = {crossDomain: true}

const onPeopleResponse = function(data){ 
  console.log(`Hola, soy ${data.name} y mido ${data.height} centimetros`)
}
const onError = function(id){
  console.log(`No se pudo obtener el persoaje#${id}`)
}


  function ObtenerPersonaje(id){
  var id = prompt('Qué id quieres ?')
  const PeopleURL = `${API_URL}${REFERENCE_URL.replace(':id',id)}`
  $.get(PeopleURL,opts,onPeopleResponse)
  .fail(onError)
}

