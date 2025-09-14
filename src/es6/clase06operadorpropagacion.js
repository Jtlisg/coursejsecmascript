//spread operator
//podemos unir varios objetos o variables a una nueva variable

let person = {
    name: 'oscar',
    age: 30
};

let country = 'MX';

let data = {...person,country};
console.log(data);

//rest

function sum(num, ...values){
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
};


sum(1,1,2,3)