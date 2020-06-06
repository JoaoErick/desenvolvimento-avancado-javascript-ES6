

const EventEmitter = require('events');

class Users extends EventEmitter{
    userLogged(data){
        this.emit('User logged', data);
    }
}

const users = new Users();

/* users.on('User logged', data => {
    console.log(data);
});

users.userLogged({user: 'João Erick Barbosa'}); */

users.once('User logged', data => { //Consome apenas uma vez
    console.log(data);
});

users.userLogged({user: 'João Erick Barbosa'});
users.userLogged({user: 'Carlos Barreto'}); //Não será consumido