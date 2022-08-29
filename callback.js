
//Build two functions in order to use callbacks
function hola(nombre, miCallback) {
    setTimeout(function(){
        console.log('Hola', nombre);
        miCallback();
    }, 1000);
}

function adios(nombre, miOtroCallback){
    setTimeout(function(){
        console.log('Adios', nombre);
        miOtroCallback();
    },1000);
}

console.log('Inicializando');

hola('Ivan', function(){
    adios('Ivan', function(){
        console.log('Terminando proceso...');
    });
})
