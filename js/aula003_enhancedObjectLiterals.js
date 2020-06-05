/* var prop2 = 'DIO'
var obj = {
    prop1: 'Digital innovation one',
    prop2: prop2
}

console.log(obj); */

//Com o ES6, só é preciso colocar a propriedade, desde que a propriedade e a variavel tenham o mesmo nome.
function method1(){
    console.log('method called');
}

var propName = 'test';

var obj = {
    /* method1,
    //ou ainda
    sum: function sum(a, b){
        return a + b;
    }, 
    //ou ainda
    sum2(a, b){
        return a + b;
    }*/
    [propName + 'concat']: 'prop value'
}
/* obj.method1();
console.log(obj.sum(5, 5));
console.log(obj); 
obj[propName] = 'prop value'; //Com o ES6 posso fazer isso dentro do objeto.
*/
console.log(obj);