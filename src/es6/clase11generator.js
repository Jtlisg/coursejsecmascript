//El asterisco una diferencia de una funcion normal 
//Recuerda su estado desde su primera ejecucion.
function* iterate(array){
    for (let value of array){
        yield value;
    };
};

const it = iterate(['Cristofer','Evaluna','Pamela','Janeth']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
