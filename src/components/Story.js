import { Avatar } from '@material-ui/core'
import React from 'react'
import '../styles/Story.css'
function Story({ image, ProfileSrc, tittle }) {
    return (

        <div className="story" style={{ backgroundImage: `url(${image})` }} >
            <div className="story__layer"></div>
            <Avatar className="story__avatar" src={ProfileSrc} />
            <h4>{tittle}</h4>
        </div>
    )
}

export default Story
