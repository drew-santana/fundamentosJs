//que pasa si un reguest falla por conexión a internet ??
// manejo de fallos
const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const opts = { crossDomain: true}





function obtenerPersonaje(id,callback){
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
    
    $
    .get(url,opts,callback)
    //agrupamos los dos callback que teniamos en uno sólo por parametro
    .fail(()=>{
        console.log(`ocurrió un error, no se pudo obtener el personaje ${id}`)
    }) 
    //a parte del metodo get podemos crear un .fail que se va a ejecutar si ocurre algún error
}

obtenerPersonaje(1, function (personaje){ //definimos la funcionalidad del callback para cada una de las invocaciones

    console.log(`Hola, yo soy ${personaje.name}`)
    
    obtenerPersonaje(2, function(personaje){
        console.log(`Hola, yo soy ${personaje.name}`)

        obtenerPersonaje(3, function(personaje){
            console.log(`Hola, yo soy ${personaje.name}`)

            obtenerPersonaje(4, function(personaje){
                console.log(`Hola, yo soy ${personaje.name}`)

                obtenerPersonaje(5, function(personaje){
                    console.log(`Hola, yo soy ${personaje.name}`)

                    obtenerPersonaje(6, function(personaje){
                        console.log(`Hola, yo soy ${personaje.name}`)

                    
                    })
                })
            })
        })
    })
})
