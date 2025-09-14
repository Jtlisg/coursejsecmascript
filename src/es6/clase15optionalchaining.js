//Objetos anidados
const users = {
    nanoJt : {
        country : 'Hn'
    },
    ana : {
        country : 'MX'
    }
}

//El programa accede a los datos por que si existen
console.log(users.nanoJt.country);
console.log(users.ana.country);

//El programa no se rompe porque con el metodo ? no se crea el error retorna undefined
console.log(users.katherine?.country);//usuario no existe 
