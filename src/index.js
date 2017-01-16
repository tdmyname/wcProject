/**
 * Created by HP on 2017/1/11.
 */
import React from 'react'
import { render } from 'react-dom'
import Root from './containers/Root'

const myDiv = document.createElement('div')
document.body.appendChild(myDiv)



render(
    <Root />
    ,
    myDiv
)


