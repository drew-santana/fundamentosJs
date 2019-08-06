var IDs = []
var numeroIDs = parseInt(prompt('¿Cuántos personajes quieres?'))

function sumarLenght(IDsPedidos){
  // var numeroIDs = numeroIDs - 1
  IDsPedidos  += 1
  for(var i = 1;i< IDsPedidos;i++){
    IDs.push(i)
  }
}
sumarLenght(numeroIDs)
// function Hola(id){
//   console.log(`Hola ${id} !`)
// }
function guardarIDs(numeroIDs){
  sumarlenght(numeroIDs)
} 
const API_URL = 'https://swapi.co/api/'
const URL_PEOPLE = 'people/:id'
const CONEXION = {crossDomain: true}

function obtenerPersonaje(id){
  return new Promise( (resolve,reject)=>{
    var URL = `${API_URL}${URL_PEOPLE.replace(':id',id)}`
    
    $.get(URL,CONEXION,function(data){
      resolve(data)
    }) 
    .fail( ()=>reject(id) )
  })
}
var promesas = IDs.map((id)=> obtenerPersonaje(id))

const Success = function(data){
  console.log(`Hola, soy ${data.name} `)
}
const onError = function(id){
  console.log(`ah ocurrido un error al obtener  ${id}`)
}
// obtenerPersonaje(1)
// .then(Success)
// .catch(onError)

function obtenerPersonajes(personajes){
  for(var i = 0; i< personajes.length;i++){
    var nombre = personajes[i].name
    var piel = personajes[i].skin_color
    console.log(`Hola, soy ${nombre} y mi piel es de color ${piel}`)
  }
}

Promise
.all(promesas)
.then(personajes =>obtenerPersonajes(personajes)) 


// function sumarlenght(numero){
//   for(var i = 0; i< numero; i++){
//      IDs.push(2)
    
//   }
// }
