

//----Symbols----

/* const uniqueId = Symbol(); //Identificador único.
console.log(uniqueId);

const uniqueId2 = Symbol('Hello');
const uniqueId3 = Symbol('Hello');
console.log(uniqueId2 === uniqueId3); //false

const obj = {
    [uniqueId]: 'Hello' //Symbol(): 'Hello' ou Symbol(Hello): 'Hello'
}
console.log(obj); */

// Well Known symbols

Symbol.iterator;
Symbol.split;
Symbol.toStringTag;

/* const arr = [1, 2, 3, 4];
const it = arr[Symbol.iterator](); //Metapropriedade do array
 */

/* console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next()); */

/* while(true){
    let {value, done} = it.next();

    if(done) {
        break;
    }
    console.log(value); //1, 2, 3, 4
} */

/* const str = 'Digital Innovation one'; */

//Com o ES6
/* for (let value of arr){
    console.log(value); //1, 2, 3, 4
} */

/* for (let value of str){
    console.log(value); //D, i, g, i, t, a, l...
} */


const obj = {  //Criando um objeto iterável
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
}

const it = obj[Symbol.iterator]();

/* console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next()); */

for(let value of obj){
    console.log(value);
}
