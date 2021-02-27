import React from 'react'
import "../styles/sidebar.css";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/AddSharp';
import SidebarChannel from './sidebarChannel';
import SignalCellularIcon from '@material-ui/icons/SignalCellularAltSharp';
import CallEndIcon from '@material-ui/icons/CallEndSharp';
import InfoIcon from '@material-ui/icons/InfoOutlined';
import SidebarProfile from './sidebarProfile';


function SideBar() {
    return (
        <div className="sidebar"> 
        
        <div className="sidebar_top">
        <h3>ChannelName</h3>
        <ExpandMoreIcon/>
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

export default SideBar
