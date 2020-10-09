const resolvedPromise = () => {
    setTimeout(()=>{
        let success = {'message': 'delayed success!'}
        console.log(success);
    
    },500)
}
const rejectedException = ()=>{
    setTimeout(()=>{
        try{
            throw new Error('error: delayed exception!');
        } catch(e){
            console.error(e);
           
        }
    },500)
}


async function asyncPromise() {
    const result = await resolvedPromise()
    const error = await rejectedException()
    return result, error;
}

return asyncPromise()
