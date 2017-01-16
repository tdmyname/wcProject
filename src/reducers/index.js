/**
 * Created by HP on 2017/1/11.
 */
import { combineReducers } from 'redux'
import {
    REFRESH,LOGIN,LOGOUT
} from '../actions'

const rootReducer = combineReducers({
    listChange,
    login
})

function listChange(state = {
    waitUsers: []
},action) {
    switch(action.type){
        case REFRESH:
            return Object.assign({},state,{waitUsers:action.newWaitList})
        default:
            return state
    }
}
function login(state = {
   user: undefined
},action) {
    switch(action.type){
        case LOGIN:
            return Object.assign({},state,{user:action.self})
        case LOGOUT:
            return Object.assign({},state,{user:undefined})
        default:
            return state
    }
}






export default rootReducer