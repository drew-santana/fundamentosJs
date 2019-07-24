var cami = {
    nombre: 'Camilo',
    apellido: 'Santana',
    edad: 22,
    peso: 60
}

console.log(`en enero ${cami.nombre} pesa ${cami.peso} kg`)

const INCREMENTO_PESO = 0.2
const daysOfYear = 365
const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
 

for (var i = 1; i <= daysOfYear; i ++) {
    var random = Math.random()

    if (random < 0.25){
        aumentarDePeso(cami)
    }else if(random < 0.5){
        adelgazar(cami)

    }
}

console.log(`en diciembre ${cami.nombre} pesa ${cami.peso.toFixed(1)} kg`)