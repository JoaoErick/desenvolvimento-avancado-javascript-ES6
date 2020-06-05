/* function multiply(a, b){

    return a * b;
}

console.log(multiply(5, 5));
console.log(multiply(5)); //Erro Not a Number
 */

/* function multiply(a, b){
    b = b || 1; //Se b não existe, atribui 1 a b.
    //Ou ainda b = typeof b === 'undefined' ? 1 : b;
    return a * b;
}
console.log(multiply(5)); */

//Novo ES6 pode-se atribuir um valor padrão no parâmetro caso não seja passado nada a ele.
/* function multiply(a, b = 1){
    return a * b;
}
console.log(multiply(5)); */

//lazy evaluation
function randomNumber(){
    console.log('Generating a random number...');

    return Math.random() * 10;
}

function multiply(a, b = randomNumber()){
    return a * b;
}

console.log(multiply(5));
console.log(multiply(5));
