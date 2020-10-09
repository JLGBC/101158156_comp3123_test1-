const resolvedPromise = () => {
    setTimeout(()=>{
        let success = {'message': 'delayed success!'}
        console.log(success);
    
    },500)
}
const resolvedException = ()=>{
    setTimeout(()=>{
        try{
            throw new Error('error: delayed exception!');
        } catch(e){
            console.error(e);
           
        }
    },500)
}

resolvedPromise()
resolvedException()