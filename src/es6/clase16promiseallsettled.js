//Metodo de promesa para obtener las que se resolvieron y las que no se resolvieron
const promiseOne = new Promise((resolve,reject) =>{
    reject('No Funciono');
});
const promiseTwo = new Promise((resolve,reject) =>{
    resolve('En Hora Buena!');
});
const promiseThree = new Promise((resolve,reject) =>{
    resolve('En Hora Buena!');
});


Promise.allSettled([promiseOne,promiseTwo,promiseThree])
    .then(response => console.log(response));