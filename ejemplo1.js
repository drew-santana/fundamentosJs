const API_URL = 'https://swapi.co/api/'
<<<<<<< HEAD
const REFERENCE_URL = 'planets/3'

const opts = {crossDomain: true}


function ObtenerPersonaje(id){
  return new Promise((resolve,reject)=>{
    const URL = `${API_URL}${REFERENCE_URL.replace('3',id)}` 
    $.get(URL,opts,function(data){
      resolve(data)
    })
    .fail(()=> reject(id))
  })
}
const onPeopleResponse = function(data){
  console.log(`${data.name}`)
}
const onError = function(id){
  console.log(`No se pudo obtener el personaje ${id} `)
}
//cómo preguntar el numero de busquedas ?  
var ids = [1,2,3,4,5,6,7]
var promesas = ids.map((id)=> ObtenerPersonaje(id))

function obtenerPersonajes(personajes){
 for(var i = 0; i<personajes.length; i++ ){
   console.log(personajes[i].name)
 }
  
}
Promise.
all(promesas)
.then(personajes => obtenerPersonajes(personajes))
.catch(onError)

=======
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
>>>>>>> bd60d26c52e2a8409a48f0be18fea3c1fef60557

// ObtenerPersonaje(1)
// .then((data)=>{
//   onPeopleResponse(data)
//   return ObtenerPersonaje(2)
// }).then(onPeopleResponse)
// .catch(onError)