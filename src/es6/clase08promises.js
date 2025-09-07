const anotherFunction = () => {
    //Esta funcion retorna esta promesa que tiene dos parametros
    return new Promise ((resolve,reject)=>{
        //Este valor lo podemos cambiar true and false para que la promesa 
        // se resuelva o no y ver los dos escenarios.
        if (false){
            resolve('Hey!! Logramos llegar');
        }else{
            reject('No funciono');
        };
    });
};

//Manejando la promesa con then y catch
anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err));