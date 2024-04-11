import configureStore from './store/configureStore'
 
import {bugAdded
    ,bugResolved,
    unresolvedBugsSelector,
     bugAssignedToUser,
    bugsByUserSelector} from './store/bugs'
import * as projectActions from './store/projects'
import {userAdded} from './store/user'
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


// Create user
store.dispatch(userAdded({name:"User 1"}))

store.dispatch(projectActions.projectAdded({title:"Project 1"}))
store.dispatch(bugAdded({description:"BUG 1"}))
store.dispatch(bugAdded({description:"BUG 2"}))
store.dispatch(bugAdded({description:"BUG 3"}))
store.dispatch(bugResolved({id:2}))

// Assign a bug to the user
store.dispatch(bugAssignedToUser({bugId:1,userId:1}))

console.log(store.getState());

// const x =unresolvedBugsSelector(store.getState())

// console.log(x );  


const bugs= bugsByUserSelector(1)(store.getState())
console.log(bugs);