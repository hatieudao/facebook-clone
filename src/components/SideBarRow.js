import { Avatar } from '@material-ui/core'
import React from 'react'
import '../styles/SideBarRow.css'
function SideBarRow({ src, Icon, tittle }) {
    const Type = src ? "name" : "option";
    return (
        <div className="sidebar__row">
            {src && <Avatar src={src} />}
            {Icon && <Icon />}
            <h4 className={Type} >{tittle}</h4>
        </div>
    )
}

export default SideBarRow
