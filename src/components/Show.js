/**
 * Created by HP on 2017/1/11.
 */
import React from 'react'
export default class Show extends React.Component {
    render() {
        const {waitUsers} = this.props
        if (waitUsers.length == 0) {
            return <div style={{display: "inline-block", float: "left"}}> 没人</div>
        }
        else {
            return (
                <div style={{display: "inline-block", float: "left"}}>
                    当前使用者:{waitUsers[0]}
                    <ul>

                        {waitUsers.filter(user=>user != waitUsers[0]).map(user =>
                            <li key={user}>
                                {user}
                            </li>)
                        }
                    </ul>
                </div>
            )

        }
    }
}
