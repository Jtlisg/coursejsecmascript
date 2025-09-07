// object literals

function newUser(user,age,country){
    return {
        // Asignacion antigua
        // user:user,
        // age:age,
        // country:country
        
        // Asignacion directa
        user,
        age,
        country
        
    };
};

console.log(newUser('nanojt',23,'MX'));
