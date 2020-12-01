class Mascota{  //las clases SIEMPRE tienen mayuscula en la primera letra del nombre
    constructor(type, race, name, color, size){
        this.petType = type,
        this.petRace = race,
        this.petName = name,
        this.petColor = color,
        this.petSize = size
    }
}

const gato = new Mascota('gato', 'mestizo', 'jorge', 'amarillo', 'mediano')//creacion del objeto gato

console.log('gato: ', gato)


//OTRA FORMA DE CREAR UN OBJETO

const person = {
    name: 'sergio aguirre',
    age: 23,
    work: 'sovos'
}

person.name = 'pepe' //redefinir la propiedad desde afuera
person.phone = 123456789 //agrego una propieda desde afuera

console.log(person)

//PUEDO LLAMAR CUALQUIER PARAMETRO DEL OBJETO DESDE UNA FUNCION

function test(object){
    console.log(object.age)
}

const person = {
    name: 'sergio aguirre',
    age: 23,
    work: 'infomanager'
}

test(object)