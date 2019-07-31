var cami = {
    nombre: 'Camilo',
    apellido: 'Santana',
    edad: 22,
    peso: 60
}

console.log(`en enero ${cami.nombre} pesa ${cami.peso} kg`)

const INCREMENTO_PESO = 0.3
const daysOfYear = 365
const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const haceDeporte = () => Math.random() < 0.4
const META = cami.peso - 3
var dias = 0
while (cami.peso > META) {
    
    if(comeMucho()){
       aumentarDePeso(cami) 
    }
    if(haceDeporte()){
        adelgazar(cami)
    }
dias ++

}
console.log(`pasaron ${dias} días hasta que ${cami.nombre} cumplió su meta`)