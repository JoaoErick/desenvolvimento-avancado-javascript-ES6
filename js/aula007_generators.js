//Symbols
const uniqueId = Symbol(); //Identificador único.

// Well Known symbols

/* const obj = {  //Criando um objeto iterável
    values: [1, 2, 3, 4],
    [Symbol.iterator](){
        let i = 0;

        return {
            next:() => {
                i++;

                return {
                    value: this.values[i - 1],
                    done: i > this.values.length
                }
            }
        }
    }
} */

//const it = obj[Symbol.iterator]();

/* console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next()); */

/* for(let value of obj){
    console.log(value);
} */

// Generators

/* function* hello(){  //Função com métodos pausáveis
    console.log('Hello');
    yield; //Primeira pausa.se colocarmos 'yield 1;' o value da iteração será 1 ao invés de undefined.

    console.log('From');
    //yield; //Segunda pausa. se colocarmos 'yield 2;' o value da iteração será 2 ao invés de undefined.
    const value = yield 2;

    console.log('Function!');
}

const it = hello();

console.log(it.next());
console.log(it.next());
console.log(it.next('outside!')); */


function* naturalNumbers(){
    let number = 0;

    while(true){
        yield number;
        number++;
    }
}
const it = naturalNumbers();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());


const obj = {  //Criando um objeto iterável com generators
    values: [1, 2, 3, 4],
    *[Symbol.iterator](){
        for(var i = 0; i<this.values.length;i++){
            yield this.values[i];
        }
    }
}

for(let value of obj){
    console.log(value);
}
