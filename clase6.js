var cami = {
    name: 'cami',
    lastName: 'santana',
    age: 22
}

function printName({name}){
    console.log(name.toUpperCase())
}
printName(cami)
printName({name: 'cristina'})