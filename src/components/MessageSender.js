import { Avatar } from '@material-ui/core';
import { InsertEmoticon, PhotoLibrary, Videocam } from '@material-ui/icons';
import React, { useState } from 'react';
import '../styles/MessageSender.css';
import { useStateValue } from '../StateProvider';
import db from '../firebase';
import firebase from 'firebase';

function MessageSender() {
    const [input, setInput] = useState('');
    const [inputURL, setInputURL] = useState('');
    const [{ user }, dispatch] = useStateValue();
    const handleSubmit = e => {
        e.preventDefault();
        db.collection("post").add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: inputURL,
        })
        setInput('');
        setInputURL('');
    }
    const name = user.displayName.split(' ')[0];
    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src={user.photoURL} />
                <form action="">
                    <input value={input}
                        onChange={e => setInput(e.target.value)}
                        type="text" placeholder={`${name}, Bạn đang nghĩ gì thế?`} />
                    <input value={inputURL}
                        onChange={e => setInputURL(e.target.value)}
                        type="text" placeholder={`Image URL`} />
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
