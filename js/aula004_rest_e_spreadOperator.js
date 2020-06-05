/* function sum(a, b){
    
    return a + b;
}
console.log(sum(5, 5)); */

/* function sum(a, b){
    var value = 0;

    for(var i = 0; i < arguments.length; i++){
        value+=arguments[i];
    }
    return a + b;
}
console.log(sum(5, 5, 5, 3, 2)); */



//----Depois do ES6----

//Rest
/* function sum(...args){
    console.log(args); //args pega todos os parâmetros e transforma em uma array.
    //ou ainda
    return args.reduce((acc, value) => acc + value, 0);
}
console.log(sum(5, 5, 5, 3, 2)); */


/* const sum = (...rest) => { //Arrow functions tambem precisam do rest.

};
console.log(sum(5, 5, 5, 3, 2)); */


/* const sum = (a, b, ...rest) => {
    console.log(a, b, rest); //rest pegará apenas os parâmetros restantes.
}
sum(5, 5, 5, 2, 3); */

//Spread Operator - funciona em strings, arrays, literal objects e objetos iteráveis 

/* const multiply = (...args) => args.reduce((acc, value) => acc * value, 1);

const sum = (...rest) => {
    return multiply(...rest); //pega os itens do array e transforma em parâmetros no multiply.
}
console.log(sum(5, 5, 5, 2, 3)); */


const str = 'Digital Innovation One';
const arr = [1, 2, 3, 4];

/* function logArgs(...args){
    console.log(args);
}

logArgs(...str); //Spread em strings */

/* function logArgs(a, b, c){
    console.log(a, b, c);
}

logArgs(...arr); //Spread em arrays
 */

/* //const arr2 = arr.concat([5, 6, 7]);
//ou ainda
const arr2 = [...arr, 5, 6, 7];
console.log(arr2); */


const obj = {
    test: 123
}

const obj2 = {
    test: 456
}

const objMerged = {
    ...obj,
    ...obj2
}

console.log(objMerged);

//Spread não clonará os subfilhos de um object literal