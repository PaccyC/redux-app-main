
import { createAction,createReducer } from '@reduxjs/toolkit'
 //Action creators



// export function bugAdded(description){
//     return {
//         type:BUG_ADDED,
//         payload:{
//             description:description
//         }
//     }
// }

export const bugAdded = createAction("bugAdded",)
export const bugResolved = createAction("bugResolved")
export const bugRemoved = createAction("bugRemoved")


// Reducer 

let lastId=0;

 export default createReducer([],{
    //key : value or (event) =>eventHandler

    [bugAdded.type]: (bugs,action)=>{
        bugs.push({
            id: ++lastId,
            description:action.payload.description,
            resolved:false,
        })
    },
    [bugResolved.type]:(bugs,action)=>{
       const index= bugs.findIndex(bug => bug.id === action.payload.id)
       bugs[index].resolved =true
    }
    
})

// //a pure function
//  export default function reducer(state = [],action){
   
//     if (action.type === bugAdded.type) {
//         return [...state,
//             {
//             id: ++lastId,
//             description:action.payload.description,
//             resolved:false,
//         }]
//     }
//     else if (action.type === bugRemoved.type)
//      return state.filter(bug => bug.id !== action.payload.id);

//      else if (action.type === bugResolved.type){
//         return state.map(bug => 
//             bug.id !== action.payload.id ?bug :{...bug,resolved:true});
//      }

    
//     return state;
    
// }