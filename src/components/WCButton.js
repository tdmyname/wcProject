/**
 * Created by HP on 2017/1/12.
 */
import React, {PropTypes} from 'react'
export default class Button extends React.Component {
    render(){
        const {reserveHandle}=this.props
        return <button onClick={e=>reserveHandle(e)}>预定/取消</button>
    }
}