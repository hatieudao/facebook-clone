import React from 'react';

import '../styles/Feed.css';

import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            <Post profilePic={'https://kenh14cdn.com/2019/9/28/707229495140061558273487816867459704553472n-1569678953960624238540.jpg'}
                username={'Na'}
                timestamp={'this is time'}
                message={'my sister'}
                image={'https://photo-1-baomoi.zadn.vn/w700_r1/2020_10_03_304_36578132/0feeee776d34846add25.jpg'}
            />
            <Post profilePic={'https://cdn.24h.com.vn/upload/3-2018/images/2018-07-30/1532920644-36-ho-ca10-1530673935-width640height1055.jpg'}
                username={'Hồ Ca'}
                timestamp={'this is time'}
                message={'Ling ai'}
                image={'https://luxury-inside.vn/data/uploads/2019/04/l%C6%B0u-di%E1%BB%87c-phi-2-959x1440.jpg'}
            />

        </div>
    )
}

export default Feed
