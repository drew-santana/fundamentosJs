const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const opts = { crossDomain: true}



//esta función ahora retornará una promesa en vez de recibir un 
// callback como parametro

function obtenerPersonaje(id){
    return new Promise((resolve,reject)=>{
                                            //aquí dentro se realizará el llamado asincrono
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`

    $       // en vez de llamar al callback lo declaramos
    .get(url,opts,function(data){// y resolvemos la promesa
       resolve(data)                         //cuanto esta función se ejecute se llamará al resolve
       //esta función no se ejecutará hasta que el reguest sea exitoso
    })
    .fail( ()=> reject(id) ) //aquí sólo rechazamos la promesa
    //pasandole el id que ibamos a obtener
    }) 
}


function onError(id){ //función que se llamara en el catch
    console.log(`sucedio un error al obtener el personaje ${id}`)
}
function onSuccess(personaje){//esta función se ejecutara cuando la promesa se resulva con exito
    console.log(`El personaje 1 es ${personaje.name}`)
    //personaje es la data del resolve
}
//ahora veamos como invocamos la función
obtenerPersonaje(1)//pasamos el id que nos interesa
//no hay ningún otro parametro pues la forma de obtener el valor que 
// esperamos es llamadon al .then
.then(onSuccess)
//si sucede algún error podemos utilizar .catch
.catch(onError)//como el parametro id la esta definido como parametro en onError no hay que volver a declararlo




//promessas: 
// son varoles que aun no conocemos
// tienen tres estados posibles

// el primero es 
// pending
// toda promesa inicia por aquí
// sí la promesa se resulve exitosamente pasa al estado de 
// fulfilled
// y si ocurre algun error pasara al estado de rejected
// para obtener el valor de la resolucion de la prometa podemos
// llamar a la funcion 
// .then(val => ...)
// y allí pasaremos como parametro otra función la cual es el valor que nosotros esperabamos
// en cambio si sucede algun erros al resolver la promesa podemos hacer
// .catch(err => ...)
// el cual va a tener como parametro el error que sucedio 


//asi se crea una promesa
    // new Promise(function(resolve,reject){

    // })
// la función lleva dos parametros resolve, reject
// estan dos son funciones que debemos llamar de acuerdo que la 
// promesa se resuelve exitosamente o si sucede algun error

// si se resuelve exitosamente llamaremos a l funcion 
// resolve
// pasandole el valor que esperamos 

// si algun error sucede llamaremos entonces a la función reject pasandole el error

// para obtener luego el valor que esperabamos de la resolucion ,
// podemos llamar a 
//     new Promise(function(resolve,reject){

//     }).then(valor => {
//         ...
//     })
// y allí tendriamos el valor disponible para nosotros en otra función

// sí sucede algun error podemos llamar a 
//     new Promise(function(resolve,reject){

//     }).then(valor => {
//     ...
//     }).catch(err =>{

//     })
// y ahí vamos a tener el error disponible para hacer lo que tengamos que hacer

// ALGO MÁS ACERCA DE LAS PROMESAS

// es que luego de llegar al estado de fulfilled podemos retornar otra promesa
// dentro del .then y de esa manera ir encadenandolas en sucesivo a acciones asincronas
// y cada una de ellas puede ser rechazada o resulta en una nueva promesa