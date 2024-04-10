import configureStore from './store/configureStore'
 
import * as actions from './store/projects'

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

const store= configureStore();

store.subscribe(()=>{
    console.log("state changed");
})

store.dispatch(actions.projectAdded({title:"Project 1"}))
// store.dispatch(actions.bugAdded({description:"BUG 1"}))
// store.dispatch(actions.bugAdded({description:"BUG 2"}))
// store.dispatch(actions.bugAdded({description:"BUG 3"}))
// store.dispatch(actions.bugResolved({id:2}))
console.log(store.getState());