import {addBug} from '../bugs'
import  configureStore  from '../configureStore'
import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'

describe("bugs Slice",()=>{
  it("It should handle addBug function",async()=>{

    const fakeAxios = new MockAdapter(axios)
    fakeAxios.onPost('/bugs').reply(200)
  const store= configureStore();
  const bug= {description:'a'};
  const saveBug = {...bug, id:1}
  
await  store.dispatch(addBug(bug));

  console.log(store.getState());

  expect(store.getState().entities.bugs.list).toHaveLength(1)
  })
      
    
})