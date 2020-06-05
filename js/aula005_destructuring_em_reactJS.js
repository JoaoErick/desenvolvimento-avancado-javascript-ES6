var arr = ['Apple', 'Banana', 'Orange'];

var apple = arr[0];
var banana = arr[1];
var orange = arr[2];


/* var obj = {
    name: 'Celso'
} */

/* var obj = {
    name: 'Celso',
    props: {
        age: 26
    }
}
var age = obj.props.age; */

/* var obj = {
    name: 'Celso',
    props: {
        age: 26,
        favoriteColors: ['Black', 'Blue']
    }
}
var age = obj.props.favoriteColors[0]; */

var arr = [{ name: 'Apple', type: 'fruit'}];
var fruit1 = arr[0].name;
//----Destructuring----

/* var [apple2, banana2, orange2]  = ['Apple', 'Banana', 'Orange'];

console.log(apple2);

var [apple2, banana2, orange2, [tomato2]]  = ['Apple', 'Banana', 'Orange', ['Tomato']];

console.log(tomato2); */

/* //não altera o valor da propriedade de obj

var { name } = obj; //variavel com mesmo nome da propriedade
console.log(name);
var {name: nome_diferente} = obj; //variavel com nome diferente da propriedade
console.log(nome_diferente); */

/* var { props: {age: age2}} = obj;
console.log(age2); */

/* var { props: {age: age2, favoriteColors: [color1, color2]}} = obj;
console.log(color1); */

/* let [{ name: fruitName }] = arr; */

/* function sum([a, b] = [0, 0]){
    return a + b;
}

console.log(sum([5, 5]));
console.log(sum()); */

function sum({a, b}){
    return a + b;
}

console.log(sum({a: 5, b: 5}));