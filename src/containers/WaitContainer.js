/**
 * Created by HP on 2017/1/11.
 */
import React, {Component, PropType} from 'react'
import {connect} from 'react-redux'
import {refresh, login, logout} from '../actions'
import Show from '../components/Show'
import LoginButton from '../components/LoginButton'
import WCButton from '../components/WCButton'
import {getCookie, setCookie} from '../cookies/cookies'

let ws = new WebSocket("ws://localhost:8080/wc")
class WaitContainer extends React.Component {
    constructor(props) {
        super(props)
        this.loginHandle = this.loginHandle.bind(this)
        this.logoutHandle = this.logoutHandle.bind(this)
        this.reserveHandle = this.reserveHandle.bind(this)
        const {dispatch} = this.props
        ws.onmessage = (event)=> {
            dispatch(refresh(transReturnList(event.data)))
        }




    }

    componentDidMount() {
        const cookieUserName = getCookie('username');
        if (cookieUserName != null && cookieUserName  != undefined && cookieUserName  != null) {
            const {dispatch} = this.props
            dispatch(login(cookieUserName))
        }
    }

    reserveHandle(e) {
        e.preventDefault();
        const {user}=this.props
        if (user != null && user != undefined && user != null) {
            ws.send(user)

        }
    }


    transReturnList(returnList) {
        if (returnList == "")
            return []
        else
            return returnList.split(",").filter(name=>name != "")
    }

    loginHandle(user) {
        ws.send("")
        const {dispatch} = this.props
        setCookie("username",user,30)
        dispatch(login(user))
    }

    logoutHandle() {
        const {dispatch} = this.props
        setCookie("username","",30)
        dispatch(logout())
    }


    render() {
        const {waitUsers} = this.props
        const cookieUserName = getCookie('username');
        // if (cookieUserName != null && cookieUserName  != undefined && cookieUserName  != null) {
        //     this.loginHandle(cookieUserName)
        // }

        if (waitUsers === null || waitUsers === undefined) {
            return <div></div>
        }
        return (
            <div>
                <div  style={{display:"inline",float:"left"}}>
                    <div><Show waitUsers={waitUsers}></Show></div>
                    <div><WCButton reserveHandle={this.reserveHandle}
                    ></WCButton></div>
                </div>
                <div  style={{display:"inline",float:"right"}}><LoginButton loginHandle={this.loginHandle}
                                                                                    logoutHandle={this.logoutHandle}
                                                                                    user={(cookieUserName==null||cookieUserName==undefined)?this.props.user:cookieUserName}></LoginButton>
                </div>

            </div>
        )
    }
}
const mapStateToProps = (state) =>(
{
    waitUsers: state.listChange.waitUsers,
    user: state.login.user
}
)
const transReturnList = (returnList)=> {
    if (returnList == "")
        return []
    else
        return returnList.split(",").filter(name=>name != "")
}


export default connect(mapStateToProps)(WaitContainer)