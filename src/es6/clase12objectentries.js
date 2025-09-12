//Metodos de acceso y lectura de objetos 
// retorna un array

const countries = {
    MX: 'Mexico',
    CO: 'Colombia',
    HN: 'Honduras'
};

console.log(Object.entries(countries));


const countriesTwo = {
    PE: 'Peru',
    VZ: 'Venecuela',
    GT: 'Guatemala'
};

console.log(Object.values(countriesTwo));