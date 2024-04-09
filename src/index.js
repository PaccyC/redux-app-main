// import store from './store'
 
// import {bugAdded,bugResolved} from './actions'
// const unsubscribe=store.subscribe(()=>{
//     console.log("State changed!",store.getState());
// })

// store.dispatch(bugAdded("BUG 1"))
// store.dispatch(bugResolved(1));

// unsubscribe();
// //We get notified about state changes once and after there is unsubscription
// store.dispatch({

//     type:actions.BUG_REMOVED,
//     payload:{
//         id:1
//     }
// })
// console.log(store.getState());


// Using custom store
import store from './customStore'
import * as actions from './actions'

store.subscribe(()=>{
    console.log("state changed");
})
store.dispatch(actions.bugAdded("BUG 1"))
console.log(store.getState());