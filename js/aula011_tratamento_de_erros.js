/* console.log(name);
const name = 'João Erick Barbosa';

console.log('Keep going...'); */



/* try{
    //console.log(name);
    const name = 'João Erick Barbosa';

    const myError = new Error('Custom message');

    throw myError;
} catch(err){
    console.log('Error: ', err);
} finally {
    console.log('Keep going...');
} */



class CustomError extends Error{
    constructor({message, data}){
        super(message);
        this.data = data;
    }
}

try{
    const name = 'João Erick Barbosa';

    const myError = new CustomError({
        message: 'Custom message on custom error',
        data: {
            type: 'Server error'
        }
    });

    throw myError;
} catch(err){
    console.log(err);
    console.log(err.data);
} finally {
    console.log('Keep going...');
}





