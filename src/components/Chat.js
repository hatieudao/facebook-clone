import React from 'react'
import Friend from './Friend'
import '../styles/Chat.css'
import { MoreHoriz, Search, VideoCallOutlined } from '@material-ui/icons'
function Chat() {
    return (
        <div className="chat">
            <div className="chat__top">
                <h4>Người liên hệ</h4>
                <div className="chat__options">
                    <div className="chat__option">
                        <VideoCallOutlined />
                    </div>
                    <div className="chat__option">
                        <Search />
                    </div>
                    <div className="chat__option">
                        <MoreHoriz />
                    </div>
                </div>
            </div >
            <Friend friendname="Anh" friendSrc="https://picsum.photos/200/300" />
            <Friend friendname="Anh" friendSrc="https://picsum.photos/200/300" />
            <Friend friendname="Anh" friendSrc="https://picsum.photos/200/300" />
            <Friend friendname="Anh" friendSrc="https://picsum.photos/200/300" />
        </div >
    )
}

export default Chat
