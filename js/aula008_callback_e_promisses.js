//Promises

/* const doSomethingPromise = new Promise((resolve, reject) => {
    //throw new Error('Something went wrong');
    setTimeout(function(){
        resolve('First data');
    }, 1000);
});

const doOtherSomethingPromise = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve('Second data');
    }, 1000);
}); */

/* console.log(doSomethingPromise);
console.log(doOtherSomethingPromise);
//doSomethingPromise.then(data => console.log(data));
doSomethingPromise.then(data => console.log(data)).catch(error => console.log(error));

doOtherSomethingPromise
    .then(data => doOtherSomethingPromise)
    .then(data2 => console.log(data2))
    .catch(); */

/* doSomethingPromise
    .then(data => {
        console.log(data); 
        return doOtherSomethingPromise;
    })
    .then(data2 => console.log(data2))
    .catch(); */

const doSomethingPromise = () => 
    new Promise((resolve, reject) => {
        //throw new Error('Something went wrong');
        setTimeout(function(){
            resolve('First data');
        }, 1000);
});
    
const doOtherSomethingPromise = () => 
    new Promise((resolve, reject) => {
        //throw new Error('Something went wrong');
        setTimeout(function(){
            resolve('Second data');
        }, 1000);
});

//Execução sequencial
/* doSomethingPromise()
    .then(data => {
        console.log(data.split('')); 
        return doOtherSomethingPromise();
    })
    .then(data2 => console.log(data2.split('')))
    .catch(error => console.log('Ops', error));
 */

//Execução paralela
Promise.all([doSomethingPromise(), doOtherSomethingPromise()])
    .then(data => {
        console.log(data[0].split(''));
        console.log(data[1].split(''));
    }).catch(err => {
        console.log(err);
    });

//data armazenará o que executar primeiro
Promise.race([doSomethingPromise(), doOtherSomethingPromise()]).then(data => {
    console.log(data);
})
//Estados de Promise: Pending - pendente, Fulfilled - finalizado, Reject - rejeitado


//Callbacks
function doSomething(callback){
    setTimeout(function(){
        callback('First data');
    }, 1000);
    
}

function doOtherSomething(callback){
    setTimeout(function(){
        callback('Second data');
    }, 1000);
    
}

function doAll(){
    try{
        doSomething(function(data){

            var processedData = data.split('');
            try{

                doOtherSomething(function(data2){
                    var processedData2 = data2.split('');
                    try{

                    setTimeout(function(){
                        console.log(processedData, processedData2);
                    }, 1000);

                } catch(err){
                    //handle error
                }
                });
            } catch(err){
                //handle error
            }
        });
    } catch(err){
        //handle error
    }
}

//doAll();