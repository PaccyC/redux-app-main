import {addBug,bugAdded} from '../bugs'
import {apiCallBegan} from '../api'

describe("bugs Slice",()=>{
    describe('Action creators', () => {
      it("Addbug",()=>{
        const bug = {description:"a"}
         const result = addBug(bug)
         const expected ={
          type:apiCallBegan.type,
          payload:{
            url: "/bugs",
            method:'POST',
            data:bug,
            onSuccess: bugAdded.type
          }
         }
         expect(result).toEqual(expected)
      })
      
    })
    
})