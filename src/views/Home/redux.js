import {createStore} from 'redux';

export default createStore(function(state = {show_status: false}, action){
    console.log(state,action);
    switch(action.type) {
        case 'openDialog': return {
            ...state, show_status: true
        }
        case 'closeDialog': return {
            ...state, show_status: false
        }
        default: return state
    }
})
