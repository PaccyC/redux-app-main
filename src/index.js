import configureStore from './store/configureStore'

import { loadBugs, assignBugToUser } from './store/bugs';
const store = configureStore();

store.dispatch(loadBugs());
setTimeout(()=>store.dispatch(assignBugToUser(4,2)),2000)

// store.dispatch(addBug({id:Date.now(), description:"another bug",resolved:false}))

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

