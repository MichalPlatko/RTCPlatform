import React from 'react'
import {Avatar} from "@material-ui/core";
import MicIcon from '@material-ui/icons/Mic';
import MicOffIcon from '@material-ui/icons/MicOff';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';

function SidebarProfile({src,user}) {
    return (
        <div className="sidebar_profile">
        <Avatar className="sidebar_profileAvatar">M</Avatar>
        <div className="sidebar_profileInfo">
        <h3>UserName</h3>
        <p>#TAG</p>
        </div>
        <div className="sidebar_profileIcons">
        <MicIcon/>
        <HeadsetIcon/>
        <SettingsIcon/>
        </div>
        </div>
    )
}

export default SidebarProfile
