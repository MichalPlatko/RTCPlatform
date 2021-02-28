import React from 'react'
import "../styles/sidebar.css";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/AddSharp';
import SignalCellularIcon from '@material-ui/icons/SignalCellularAltSharp';
import CallEndIcon from '@material-ui/icons/CallEndSharp';
import InfoIcon from '@material-ui/icons/InfoOutlined';
import {Avatar} from "@material-ui/core";
import MicIcon from '@material-ui/icons/Mic';
import MicOffIcon from '@material-ui/icons/MicOff';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';

class SideBar extends React.Component{
    render(){
    return (
        <div className="sidebar"> 
        
        <div className="sidebar_top">
        <h3>Server Name</h3>
        <ExpandMoreIcon />
        </div>
        
        <div className="sidebar_channels">
        <div className="sidebar_channelsHeader">
        <div className="sidebar_header">
        <ExpandMoreIcon/>
        <h4>Text Channels</h4>
        </div>
        <AddIcon className="sidebar_addChannel" />
        </div>

        <div className="sidebar_channelsList">
        <SidebarChannel/>
        <SidebarChannel/>
        <SidebarChannel/>
        <SidebarChannel/>
        <SidebarChannel/>
        <SidebarChannel/>
        </div>
        </div>

        <div className="sidebar_voice">
        <SignalCellularIcon className="sidebar_voiceIcon"/>
        <div className="sidebar_voiceInfo">
        <h3>Voice Connected</h3>
        <p>Channel name</p>
        </div>
        <div className="sidebar_voiceControl">
        <InfoIcon/>
        <CallEndIcon/>
        </div>
        </div>

        <SidebarProfile/>

        </div>
    )
    }
}


class SidebarProfile extends React.Component {
    constructor(props){
    super(props);
    this.src=this.props.src;
    this.user=this.props.user;
    }
    render(){
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
}

class SidebarChannel extends React.Component{
    constructor(props){
        super(props);
        this.id=props.id;
        this.name=props.name;
    }
    render(){
    return (
        <div className="sidebarChannel">
        <h4>
        <span className="sidebarChannelHashIcon">#</span>
        Channel name
        </h4>
        </div>
    )
    }
}

export default SideBar;
