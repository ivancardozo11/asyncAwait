//Making a callback through moduralization

function hola(nombre, callback){
    setTimeout( function() {
        console.log('primer proceso', nombre);
        callback(nombre);
    },1000);
}

function habla(CallbackHablar){
    setTimeout( function() {
        console.log('Bla bla bla');
        CallbackHablar();
    },1000);
}

function adios(nombre, otroCallback){
    setTimeout( function(){
        console.log('Adios', nombre);
        otroCallback();
    }, 1000);
}


function conversacion(nombre, veces, callback) {
    if (veces > 0 ) {      
        habla(function(){
            conversacion(nombre, --veces, callback);
        })
    }
    else{
        adios(nombre, callback);
    }
}
console.log('Iniciando proceso...');
hola('Ivan', function (nombre) {
    conversacion(nombre, 3, function(){
        console.log('Proceso terminado');
    });
});