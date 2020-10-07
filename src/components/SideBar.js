import React from 'react';
import SideBarRow from './SideBarRow';
import PeopleIcon from '@material-ui/icons/People';
import GroupWorkRoundedIcon from '@material-ui/icons/GroupWorkRounded';
import StoreMallDirectoryRoundedIcon from '@material-ui/icons/StoreMallDirectoryRounded';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
//style
import '../styles/SideBar.css';
function SideBar() {
    const urlHC = '../icons/bell.png';
    return (
        <div className="sidebar">
            <SideBarRow src={urlHC} tittle="Java" />
            <SideBarRow Icon={PeopleIcon} tittle="Bạn bè" />
            <SideBarRow Icon={GroupWorkRoundedIcon} tittle="Nhóm" />
            <SideBarRow Icon={StoreMallDirectoryRoundedIcon} tittle="Market Place" />
            <SideBarRow Icon={VideoLibraryIcon} tittle="Video" />
            <SideBarRow Icon={ExpandMoreIcon} tittle="Xem thêm" />
        </div>
    )
}

export default SideBar;
