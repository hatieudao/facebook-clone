import { Avatar } from '@material-ui/core';
import { InsertEmoticon, PhotoLibrary, Videocam } from '@material-ui/icons';
import React, { useState } from 'react';
import '../styles/MessageSender.css';
function MessageSender() {
    const [input, setInput] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
    }
    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar />
                <form action="">
                    <input value={input}
                        onChange={e => setInput(e.target.value)}
                        type="text" placeholder="Bạn đang nghĩ gì thế?" />
                    <button onClick={handleSubmit} type="submit">Đăng</button>
                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <Videocam style={{ color: 'red' }} />
                    <h5>Video trực tiếp</h5>
                </div>
                <div className="messageSender__option">
                    <PhotoLibrary style={{ color: 'green' }} />
                    <h5>Ảnh/Video</h5>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticon style={{ color: 'orange' }} />
                    <h5>Cảm xúc/Hoạt động</h5>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
