// la unica manera de obtener los reguests
//  en orden es si mantenemos ese orden
const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const opts = { crossDomain: true}

// const onPeopleResponse = function(person){ 
    
//     console.log(`Hola, yo soy ${person.name}`)
// }

// hacemos que la función acepte un segundo parametro
// el cual será un callback

function obtenerPersonaje(id,callback){
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
    // hacemos que el primer callback que se ejecuta en el reguest
    // en vez de ser otra función sea directo
    $.get(url,opts,function(person){ 
    
        console.log(`Hola, yo soy ${person.name}`)
        //condisionamos la llegada del callback
        if(callback){
            callback()
        }
    }) 
}
//aún no podemos garantiar el orden
// loque tenemos que hacer es ir llamadon a cada una de las sigues función con callbacks
//perdemos el paralerismo de lso reguests

//CALLBACK HELL !!!
obtenerPersonaje(1, function (){ //este es el callback
    obtenerPersonaje(2, function(){
        obtenerPersonaje(3, function(){
            obtenerPersonaje(4, function(){
                obtenerPersonaje(5, function(){
                    obtenerPersonaje(6, function(){
                        obtenerPersonaje(7)
                    })
                })
            })
        })
    })
})

//¿porque poner la función directa ? y no una invocación
// porque si la invocamos se ejecuta de inmediato, incluso antes del primer obtenerPersonaje

