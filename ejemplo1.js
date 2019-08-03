const API_URL = 'https://swapi.co/api/'
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


// ObtenerPersonaje(1)
// .then((data)=>{
//   onPeopleResponse(data)
//   return ObtenerPersonaje(2)
// }).then(onPeopleResponse)
// .catch(onError)