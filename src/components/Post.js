import { Avatar } from '@material-ui/core'
import { CommentOutlined, Share, ThumbUp } from '@material-ui/icons'
import React from 'react'

import '../styles/Post.css'

function Post({ profilePic, username, image, message, timestamp }) {
    return (
        <div className="post">
            <div className="post__top">
                <Avatar src={profilePic} className="post_avatar" />
                <div className="post__topInfo">
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>
            <div className="post__bottom">
                <p>{message}</p>
            </div>
            <div className="post__image">
                <img src={image} alt="" />
            </div>
            <div className="post__options">
                <div className="post__option">
                    <ThumbUp />
                    <p>Thích</p>
                </div>
                <div className="post__option">
                    <CommentOutlined />
                    <p>Bình luận</p>
                </div>
                <div className="post__option">
                    <Share />
                    <p>Chia sẽ</p>
                </div>
            </div>
        </div>
    )
}

export default Post
