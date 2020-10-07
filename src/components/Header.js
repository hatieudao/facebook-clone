import React from 'react';
//---icons
import Logo from '../icons/facebook.png';
//Material UI
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import OndemandVideoOutlinedIcon from '@material-ui/icons/OndemandVideoOutlined';
import StoreIcon from '@material-ui/icons/Store';
import GamepadIcon from '@material-ui/icons/Gamepad';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
//---style
import '../styles/Header.css';


function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src={Logo} alt="fb-icon" />
                <div className="header__input">
                    <SearchIcon className="search-icon" />
                    <input type="text" placeholder="Tìm kiếm trên Facebook" />
                </div>
            </div>
            <div className="header__center">
                <div className="header__option header__option--active"><HomeIcon fontSize="large" /></div>
                <div className="header__option"><OndemandVideoOutlinedIcon fontSize="large" /></div>
                <div className="header__option"><StoreIcon fontSize="large" /></div>
                <div className="header__option"><GamepadIcon fontSize="large" /></div>
            </div>
            <div className="header__right">
                <div className="header__info">
                    <AccountCircleIcon />
                    <h4 className="Name">Java</h4>
                </div>
                <div className="header__community">
                    <IconButton>
                        <AddIcon />
                    </IconButton>
                    <IconButton>
                        <ForumIcon />
                    </IconButton>
                    <IconButton>
                        <NotificationsIcon />
                    </IconButton>
                    <IconButton>
                        <ExpandMoreIcon />
                    </IconButton>
                </div>
            </div>
        </div>

    )
}
export default Header;