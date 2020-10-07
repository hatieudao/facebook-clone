import React from 'react'
import '../styles/StoryReel.css'
import Story from './Story'
function StoryReel() {
    return (
        <div className="storyReel">
            <Story image="https://picsum.photos/seed/picsum/200/300" ProfileSrc="https://picsum.photos/id/870/200/300?grayscale&blur=2" tittle="Anh" />
            <Story image="https://picsum.photos/seed/picsum/200/300" ProfileSrc="https://picsum.photos/id/870/200/300?grayscale&blur=2" tittle="Nam" />
            <Story image="https://picsum.photos/seed/picsum/200/300" ProfileSrc="https://picsum.photos/id/870/200/300?grayscale&blur=2" tittle="Nhi" />
            <Story image="https://picsum.photos/seed/picsum/200/300" ProfileSrc="https://picsum.photos/id/870/200/300?grayscale&blur=2" tittle="Đại" />
            <Story image="https://picsum.photos/seed/picsum/200/300" ProfileSrc="https://picsum.photos/id/870/200/300?grayscale&blur=2" tittle="Nhân" />
        </div>
    )
}

export default StoryReel
