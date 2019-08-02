const API_URL = 'https://swapi.co/api/'
const REFERENCE_URL = 'people/:id'
 
const opts = {crossDomain: true}

var id = 1


  function ObtenerPersonaje(id){
  const onPeopleResponse = function(data){ 
    console.log(`Hola, soy ${data.name} y mido ${data.height} centimetros`)
  }
  
  function onError(id){ //función que se llamara en el catch
    console.log(`sucedio un error al obtener el personaje ${id}`)
}
  const PeopleURL = `${API_URL}${REFERENCE_URL.replace(':id',id)}`
  $.get(PeopleURL,opts,onPeopleResponse)
  .fail(()=>{
    console.log(`Ha ocurrido un ERROR al tratar de obtener personaje ${id}`)
})
}
ObtenerPersonaje(2)
ObtenerPersonaje(3)
ObtenerPersonaje(4)
ObtenerPersonaje(5)

