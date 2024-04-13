
import { createSlice,createSelector } from '@reduxjs/toolkit'
import { apiCallBegan } from './api';
import moment from 'moment'
let lastId=0

  const bugsSlice=createSlice  ({
    name:"bugs",
    initialState:{
        list:[],
        loading:false,
        lastFetched:null
    },
    reducers:{
        bugsRequested:(bugs,action)=>{
         bugs.loading = true;
        },
        bugsReceived : (bugs,action)=>{
        bugs.list = action.payload;
        bugs.loading = false;
        bugs.lastFetched = Date.now();
        },
        bugsRequestFailed :(bugs,action)=>{
       bugs.loading= false;
        },
        // Assign a bug to the team member(user)
        bugAssignedToUser: (bugs,action)=>{
            const  {bugId,userId} = action.payload
            const index= bugs.list.findIndex(bug =>bug.id === bugId);
            bugs.list[index].userId = userId;
        },
        bugAdded:(bugs,action)=>{
            bugs.list.push({
                id: ++lastId,
                description:action.payload.description,
                resolved:false,
            })
        },
        bugResolved:(bugs,action)=>{
            const index= bugs.list.findIndex(bug => bug.id === action.payload.id)
            bugs.list[index].resolved =true
        }
    }
})

export default bugsSlice.reducer

export const {bugAdded,
    bugResolved,
    bugAssignedToUser,
    bugsReceived,
    bugsRequested,
    bugsRequestFailed} =bugsSlice.actions

//     actions.apiCallBegan({
 
//         url:"/bugs",
//         onStart:"bugs/bugsRequested",
//         onSuccess:"bugs/bugsReceived",
//         onError:"bugs/bugsRequestFailed",
    
    
// })

const url ="/bugs"
export const loadBugs  = () =>(dispatch,getState)=>{
    const {lastFetched} =getState().entities.bugs;

    const diffInMin= moment().diff(moment(lastFetched),"minutes")
    if(diffInMin <10)return
    dispatch(
        apiCallBegan({
            url,
            onStart:bugsRequested.type,
            onSuccess:bugsReceived.type,
            onError:bugsRequestFailed.type,
       
        })
    )
}



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