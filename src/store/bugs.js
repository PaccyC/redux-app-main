
import { createSlice,createSelector } from '@reduxjs/toolkit'
let lastId=0

  const bugsSlice=createSlice  ({
    name:"bugs",
    initialState:[],
    reducers:{
        // Assign a bug to the team member(user)
        bugAssignedToUser: (bugs,action)=>{
            const  {bugId,userId} = action.payload
            const index= bugs.findIndex(bug =>bug.id === bugId);
            bugs[index].userId = userId;
        },
        bugAdded:(bugs,action)=>{
            bugs.push({
                id: ++lastId,
                description:action.payload.description,
                resolved:false,
            })
        },
        bugResolved:(bugs,action)=>{
            const index= bugs.findIndex(bug => bug.id === action.payload.id)
            bugs[index].resolved =true
        }
    }
})

export default bugsSlice.reducer

export const {bugAdded,bugResolved,bugAssignedToUser} =bugsSlice.actions


// Selector

// export const unresolvedBugsSelector = state =>{
//     return state.entities.bugs.filter(bug => !bug.resolved)
// }


  export const unresolvedBugsSelector= createSelector (
    state =>state.entities.bugs,
    bugs => bugs.filter(bug => !bug.resolved)
   )

 
   export const bugsByUserSelector = userId => createSelector(
    state =>state.entities.bugs,
    bugs =>bugs.filter(bug => bug.userId === userId)
   )