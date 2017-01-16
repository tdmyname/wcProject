/**
 * Created by HP on 2017/1/11.
 */
import React,{Component} from 'react'
import {Provider} from 'react-redux'
import configureStore from '../configureStore'
import WaitContainer from './WaitContainer'


export default class Root extends Component{
    render()
    {
        const store =configureStore()
        return (
            <Provider store={store}>
                <div>
                    <WaitContainer/>
                </div>
            </Provider>
        )
    }
}
