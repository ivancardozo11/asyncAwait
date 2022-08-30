async function hola(nombre){
    return new Promise(function (resolve, reject) {
        
        setTimeout( function() {
            console.log('primer proceso', nombre);
            resolve(nombre);
        },1000);
    });
}

async function habla(nombre){
    return new Promise((resolve, reject)=>{

        setTimeout( function() {
            console.log('Bla bla bla');
            // resolve(nombre);
            resolve();
        },1000);
    });
}

async function adios(nombre){
    return new Promise ((resolve, reject)=>{
        setTimeout( function(){
            console.log('Adios despiendome', nombre);
            resolve();
        }, 1000);
    });
}


// Promise execution

console.log('Iniciando el proceso..');

async function main(){
    let nombre = await hola('Ivan');
    await habla();
    await habla();
    await habla();
    await habla();
    await adios(nombre);
    console.log('Termina el proceso');
}

main();