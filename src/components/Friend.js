import { Avatar } from '@material-ui/core'
import React from 'react'

import '../styles/Friend.css'
function Friend({ friendSrc, friendname }) {
    return (
        <div className="friend">
            <div className="friend__avatar">
                <Avatar src={friendSrc} />
                <div className="friend__online"></div>
            </div>
            <h5>{friendname}</h5>
        </div>
    )
}

export default Friend
