function hola(nombre){
    return new Promise(function (resolve, reject) {
        
        setTimeout( function() {
            console.log('primer proceso', nombre);
            resolve(nombre);
        },1000);
    });
}

function habla(nombre){
    return new Promise((resolve, reject)=>{

        setTimeout( function() {
            console.log('Bla bla bla');
            // resolve(nombre);
            reject('Hay un error');
        },1000);
    });
}

function adios(nombre){
    return new Promise ((resolve, reject)=>{
        setTimeout( function(){
            console.log('Adios despiendome', nombre);
            resolve();
        }, 1000);
    });
}


// Promise execution

console.log('Iniciando el proceso..');

hola('Ivan')
    .then(habla)
    .then(habla)
    .then(habla)
    .then(habla)
    .then(habla)
    .then(habla)
    .then(habla)
    .then(adios)
    .then((nombre)=>{
        console.log('Terminado el proceso');
})
//Always with promises put catch.
.catch(error =>{
    console.error('Ha habido un error:');
    console.error(error);
})