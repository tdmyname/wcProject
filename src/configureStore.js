/**
 * Created by HP on 2017/1/11.
 */
import {createStore,applyMiddleware,compose} from 'redux'
import Thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from './reducers'

const loggerMiddleware = createLogger()
export default function configureStore(state){
    return createStore(
        rootReducer,
            applyMiddleware(
                Thunk,loggerMiddleware
            )
    )
}


