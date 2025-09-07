function newUsers(name,age,country){
    //Valores por defectos para las variables si no se pasan parametros
    //dentro del cuerpo de la funcion
    var name = name || 'osacar';
    var age = age || 34;
    var country = country ||'MX';

    console.log(name,age,country);
};

newUsers();
newUsers('Jonathan',25,'Hn');

//Funcion con parametros con valores por defectos 
function newAdmin(name = 'Pedro', age = 23, country = 'mexico'){
    console.log(name,age,country);
};

newAdmin()
newAdmin('Maria',40,'Chile');