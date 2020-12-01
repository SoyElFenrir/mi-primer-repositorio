/*class Mascota{
    constructor(type, race, name, color, size){
        this.petType = type,
        this.petRace = race,
        this.petName = name,
        this.petColor = color,
        this.petSize = size
    }
}




const perro = new Mascota('perro', 'salchicha', 'pepe', 'verde', 'grande')

console.log('Detalle de tu mascota: ', perro)*/

/*let array5 = [1,1,1,1,1,1,1,1,5]
function FindUniq(array5){
    let aux = array5[0]
    let aux2 = array5[1]
    for(i=0; i<array5.length; i++){
        if(array5[i] != aux && array5[i] != aux2){
            aux = array5[i]
        }
    }
    return aux
}
console.log(FindUniq(array5))*/
/*
const list = [
    { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
  { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
  { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' }
  ];

  const age= [] 
  list.forEach( function (item) { 
      age.push(item.age)
    } )
      
function oldest (array) {
    // filtro la lista usando la maxima edad del arrya que arme recien
    const oldPeople = array.filter ( function (item) {
        return item.age === Math.max.apply(null,age)
    })
    return oldPeople
}
console.log( oldest(list))*/

/*Ejercicio 3: Teniendo en cuenta la misma conferencia anterior, necesitamos crear nombre de usuario a cada 
persona registrada dependiendo del nombre y el año en el que nacieron. Este nombre de usuario tiene que agregarse como una nueva propiedad llamada “userName
const list1 = [
  { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
  { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
];


return ==> 
[
  { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby', 
    userName: 'emilyn1990' },
  { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure', 
    userName: 'nore2000' }
]*/
/*
const hoy = new Date();
const año = hoy.getFullYear() - 30;
console.log(hoy)
console.log(año)*/

//--//--//EJERCICIO 3
/*const list1 = [
    { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
    { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
];

const hoy = new Date()
const year = hoy.getFullYear()

const array1 = list1.map(item => {
    return {...item, userName: item.firstName + (year - item.age)}
})
console.log(array1)*/

/*function newUserName(firstName, age){
    const hoy = new Date()
    const fecNac = hoy.getFullYear() - age
    return firstName + fecNac
}*/

//const newUserName = (firstName, age) => firstName + (year - age)


//--//--//EJERCICIO 4
/*Ejercicio 4: Teniendo en cuenta la misma conferencia anterior, necesitamos poder personalizar un mensaje 
para cada persona que asista al evento la próxima vez. Para eso, nuestra tarea es tener una función que 
devuelva un array donde cada posición tiene un objeto con una nueva propiedad de nombre “greeting” o “bienvenida”.
const list1 = [
  { firstName: 'Sofia', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
  { firstName: 'Madison', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];
return ==>
[
  { firstName: 'Sofia', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
    greeting: 'Hi Sofia, what do you like the most about Java?'
  },
  { firstName: 'Lukas', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python',
    greeting: 'Hi Lukas, what do you like the most about Python?'
  },
  { firstName: 'Madison', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby',
    greeting: 'Hi Madison, what do you like the most about Ruby?'
  } 
];*/
/*Ejercicio 6: Teniendo en cuenta la misma conferencia anterior, necesitamos saber el nombre y país de el 
primer desarrollador de cierto lenguaje que se haya inscripto.
return ('Python')==> Victoria from Puerto Rico was the first Python developer in the conference
return ('C#')==> There are no C# developers in the conference*/

const list2 = [
  { firstName: 'Mark', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Victoria', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
  { firstName: 'Emma', country: 'Norway', continent: 'Europe', age: 19, language: 'Python' }
];

const lengInscrip = language => {
    const developerExist = list2.find(element => element.language == language)
    if(developerExist){
        console.log(developerExist.firstName,' from ', developerExist.country, ' was the first ', developerExist.language, ' developer in the conference.')
    }else{
        console.log('There are no ', language,' developers in the conference')
    }
}

lengInscrip('C#')














