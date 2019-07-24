var contador = 0

const LaPuercaPone = () => Math.random() < 0.25

do{
    contador ++ //se ejecuta almenos una vez
}while( ! LaPuercaPone()) // se ejecta hasta que la condición NO se cumpla

if(contador === 1){
    console.log(`fui a ver si la puerca puso ${contador} vez`)
}else{
    console.log(`fui a ver si la puerca puso ${contador} veces`)
}
