/*function log(value){
    console.log(value);
}

log('teste')*/


/* var log = function(value){
    console.log(value);
};

log('teste') */


/* var sum = function(a, b){
    return a + b;
};

console.log(sum(5, 5)); */

//----------Arrow functions
var sum = (a, b) => a + b; //entre parênteses são parâmetros e do lado direito é o retorno.
console.log(sum(5, 5));    //Caso existir apenas 1 param., não é necessário o uso de parênteses.

var sum_estatements = (a, b) => {  //Com lógicas dentro da função.
    var x = 10;
    if(a < b){}

    return a + b;
}
console.log(sum_estatements(5, 10));

var createObj = () => ({ test: 123}); //({ propriedades do objeto })
console.log(createObj());

/* function car(){   //Função padrão
    this.foo = 'bar';
}
console.log(new car()); */

/* var car = () => {     //Arrow functions não podem ser construtoras.
    this.foo = 'bar';
}
console.log(new car()); */

/* log('casa');
function log(value){   //Função padrão
    console.log(value);
} */

log('carro');
var log = value => {    //Arrow functions não possuem hoisting.
    console.log(value);
}

var obj = {
    showContext: function showContext(){
        this.log('teste');

        /* setTimeout(function() {
            this.log('after 1000ms'); //Mostrará erro porque o this troca de contexto.
        }, 1000); */
        setTimeout(() => {
            this.log('after 1000ms'); //Arrow functions resolve o problema com contexto da função.
        }, 1000);
    },
    log: function log(value){
        console.log(value);
    }
};

obj.showContext();


