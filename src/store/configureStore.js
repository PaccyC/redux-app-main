//  import { createStore } from 'redux'
//  import { devToolsEnhancer } from 'redux-devtools-extension'
import {configureStore} from '@reduxjs/toolkit'
 import reducer from './reducer'
 import logger from './middlewares/logger'



export default function configureAppStore(){
 return configureStore({  reducer,
           middleware:[logger] }
  )
      
}