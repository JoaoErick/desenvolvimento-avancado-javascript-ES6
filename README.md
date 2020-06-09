# Desenvolvimento avançado em JavaScript ES6
Conceitos e práticas avançadas da linguagem JavaScript trazidos com o ES6 e desenvolvido através do acompanhamento das aulas disponibilizadas pela Digital Innovation One juntamente com o professor Celso Henrique da Silva (Front-end Chapter Lead - Easynvest).  
https://digitalinnovation.one    
![](https://img-a.udemycdn.com/course/750x422/2575266_c184.jpg)
> Fonte: Udemy (2020)  
-------------  
### Conteúdos Abordados 

* Arrow Functions
* Default Functions Arguments
* Enhanced Object Literals
* Rest e Spread Operator
* Destructuring 
* Symbols e Iterators
* Generator
* Callback e Promises  
* Fetch e Async  
* Event Emitter  
* Tratamento de erros
-------------

### Exemplo - Javascript - Rest　

```javascript
//Rest
function sum(...args){
    console.log(args); //args pega todos os parâmetros e transforma em uma array.
    //ou ainda
    return args.reduce((acc, value) => acc + value, 0);
}
console.log(sum(5, 5, 5, 3, 2));


const sum = (...rest) => { //Arrow functions também precisam do rest.
};
console.log(sum(5, 5, 5, 3, 2));


/* const sum = (a, b, ...rest) => {
    console.log(a, b, rest); //rest pegará apenas os parâmetros restantes.
}
sum(5, 5, 5, 2, 3); */
```  
-------------  
### Exemplo - Javascript - Iterator

```javascript
//Iterator
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

/*const it = obj[Symbol.iterator]();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next()); */

for(let value of obj){
    console.log(value);
}
```  
-------------  
### Exemplo - Javascript - Async/Await　

```javascript
//Async ou Await

//Execução sequencial
/* const simpleFunc = async () => { 
    const data = await asyncTimer();
    console.log(data);
    const dataJSON = await fetch('https://viacep.com.br/ws/01001000/json/').then(resStream => 
        resStream.json()
    );
    return dataJSON; //O dado só será retornado quando o asyncTimer for resolvido.
}; */

//Execução paralela
const simpleFunc = async () => { 
    const data = await Promise.all([
        asyncTimer(),
        fetch('https://viacep.com.br/ws/01001000/json/').then(resStream => resStream.json())
    ]);
   
    return data; 
};

simpleFunc().then(data => {
    console.log(data);
})
.catch(err => {
    console.log(err);
})
```  
-------------

### Exemplo - HTML code

```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Minha página</title>
        <meta charset="utf-8">
        <script type="text/javascript" src="js/aula011_tratamento_de_erros.js"></script>
    </head>
    <body>
        <h1>Minha página</h1>
       
    </body>
</html>
```
### Fim

