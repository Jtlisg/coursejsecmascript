
//Declarando la clase
// class User {

// };


/**
 
//Instancia de una clase
// const newUser = new User();



class User {
    //Metodos
    greeting(){
        return 'hello';
    };
};

const nanoJt = new User();
console.log(nanoJt.greeting());

const otroNano = new user();
console.log(otroNano.greeting());

 */

//Constructor en clases
/**
class User {
    //Constructor
    constructor(){
        console.log('New user create');
    };

    greeting(){
        return 'Hello new user'
    };
};

const david = new User();
 */



//this
/**
class User {
    //constructor
    constructor(name){
        this.name = name; 
    }
    //metodos
    speak(){
        return 'Hello'
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    };s
};


const maria = new User('Maria');
console.log(maria.greeting());
*/

//Setters y getters
class User {
    constructor(name,age){
        this.name = name;
        this.age = age;
        
    };
    //Metodos
    speak(){
        return 'Hello';
    };
    greeting(){
        return `${this.speak()} ${this.name}`;
    };

    get uAge(){
        return this.age;
    };

    set uAge(n){
        this.age = n;
    };
};

const nanoJt = new User('David',15);

console.log(nanoJt.uAge);
console.log(nanoJt.greeting());
console.log(nanoJt.uAge = 25)
