// Variables
var lastName = 'Josue';// declarar y asignar una variable
lastName = 'Pedro'; //Reasginar una variable
console.log(lastName);

let fruit = 'Apple';
fruit = 'Orange';
console.log(fruit);

const animal = 'dog';
animal = 'cat';
console.log(animal);

const fruits = () => {
    if (true){
        var fruitOne = 'Sandia';//Function scope
        let fruitTwo = 'Uva';//no function scope block scope
        const fruitThree = 'Banana';// no function scope block scope

    };
    console.log(fruitOne);
    console.log(fruitTwo);
    console.log(fruitThree);
}

fruits();