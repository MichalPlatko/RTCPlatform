import React from 'react';
import "../styles/leftsidebar.css";
import {Fab,Avatar,Tooltip} from "@material-ui/core";
import AccessibilityIcon from '@material-ui/icons/AccessibilityNewSharp';


class LeftSideBar extends React.Component{
    render(){
    return (
        <div className="leftsidebar">
        <Fab size="medium">
        <AccessibilityIcon/>
        </Fab>
        <ServerAvatar/>
        <ServerAvatar/>
        <ServerAvatar/>
        <ServerAvatar/>
        <ServerAvatar/>
        <ServerAvatar/>
        <ServerAvatar/>


        </div>
    )
    }
}
class ServerAvatar extends React.Component {
    render(){
    return (
        <div className="serverAvatar">
        <Tooltip  title="Server Name" placement="right">
        <Avatar/>
        </Tooltip>
        </div>
    )
    }
}


export default LeftSideBar;
