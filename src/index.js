import configureStore from './store/configureStore'
import * as actions from './store/api'
import { loadBugs } from './store/bugs';
const store = configureStore();

store.dispatch(loadBugs());
setTimeout(()=>store.dispatch(loadBugs()),2000)

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

