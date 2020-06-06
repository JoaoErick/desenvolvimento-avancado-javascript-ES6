//----Fetch----

/* fetch('https://viacep.com.br/ws/01001000/json/').then(responseStream => {
    //console.log(responseStream); //Obtém todos os dados do arquivo json
    responseStream.json().then(data => {
        console.log(data); //obtém apenas os dados de endereço
    })
})
//ou
fetch('https://viacep.com.br/ws/01001000/json/')
    .then(responseStream => responseStream.json())
    .then(data => {
        console.log(data);
    }); */

/* fetch('https://viacep.com.br/ws/01001000/json/')
    .then(responseStream => {
        if(responseStream.status === 200){
            responseStream.json();
        } else{
            throw new Error('Request error'); //Caso o endereço de request der erro.
        }
    })
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log('Error: ', err); //Erro ao processar o .json()
    })

        
    .then(data => {
        console.log(data);
    }); */


//----Async/Await (ES7)----


/* const simpleFunc = async () => { //Async resolve a promise assim que ela for criada.
    //throw new Error('Oh no!');
    return 12345;
};

simpleFunc().then(data => {
    console.log(data);
})
.catch(err => {
    console.log(err);
}) */

//----Await----
const asyncTimer = () => 
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(12345);
        }, 1000);
    });

/* const simpleFunc = async () => { 
    const data = await asyncTimer();
    return data; //O dado só será retornado quando o asyncTimer for resolvido.
}; */

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