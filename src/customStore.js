
import reducer from './reducer'
function createStore (reducer){
    let state;
    let listeners= [];

    function subscribe (listener){
        listeners.push(listener);
    }
    // We don't expose the state property in the object returned from function
    function dispatch(action){
     state= reducer(state,action)
    //  Notify UI components
    
    for(let i=0;i<listeners.length;i++){
        listeners[i]();
    }
    }
    function getState(){
        return state;
    }

    return {
        subscribe,
        dispatch,
        getState
    }
}

export default createStore(reducer);