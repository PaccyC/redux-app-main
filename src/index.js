import configureStore from './store/configureStore'
 
const store = configureStore();

/*
store.dispatch((dispatch,getState)=>{
    // Call an API
    // Promise resolved  => dispatch()
    dispatch({type:'bugReceived',bugs:[1,2,3]})
    console.log(getState());
    // Promise rejected => dispatch()
})
*/

store.dispatch({
    type:"error",
    payload:{message:"An Error occurred"}})

store.dispatch({
        type: "apiRequest",
        payload:{
            url:"/bugs",
            onSuccess:"bugsReceived",
            onError:"apiRequestError",
        }
    })