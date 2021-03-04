import React, { useEffect,useState } from 'react'
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

import {useSelector,useDispatch} from "react-redux";
import {selectUser} from "../userSlice";
import db from '../firebaseconfig';
import {setChannelInfo} from "../appSlice";

function SideBar(){
    const user = useSelector(selectUser);
    const [channels,setChannels] = useState([]);
    useEffect(()=>{
        //if anything changes->onSnapshot
        db.collection("channels").onSnapshot(snapshot=>{
            //each doc return object
            setChannels(snapshot.docs.map(doc=>({
            id:doc.id,
            channel:doc.data(),
            })));
        })
    },[]);

    const addChannel=()=>{
    const channelName=prompt("Add Channel Name");
    if(channelName){
        db.collection("channels").add({
            name:channelName
        });
    }
    }
    return (
        <div className="sidebar"> 
        
        <div className="sidebar_top">
        <h3>Server Name</h3>
        <ExpandMoreIcon className="sidebar_expand" />
        </div>
        
        <div className="sidebar_channels">
        <div className="sidebar_channelsHeader">
        <div className="sidebar_header">
        <ExpandMoreIcon/>
        <h4>Text Channels</h4>
        </div>
        <AddIcon onClick={addChannel} className="sidebar_addChannel" />
        </div>

        <div className="sidebar_channelsList">
        {channels.map(c=>(<SidebarChannel key={c.id} id={c.id} name={c.channel.name}/>))}
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

        <SidebarProfile  photo={user.photo} userName={user.displayName} tag={user.uid} />

        </div>
    )
}


function SidebarProfile({photo,userName,tag}){
    return (
        <div className="sidebar_profile">
        <Avatar className="sidebar_profileAvatar" src={photo}></Avatar>
        <div className="sidebar_profileInfo">
        <h3>{userName}</h3>
        <p>#{tag.substring(0,5)} </p>
        </div>
        <div className="sidebar_profileIcons">
        <MicIcon/>
        <HeadsetIcon/>
        <SettingsIcon/>
        </div>
        </div>
    )
}

function SidebarChannel({id,name}){
    const dispatch=useDispatch();

    return (
        <div className="sidebarChannel" onClick={()=>{
        dispatch(setChannelInfo({
            channelId:id,
            channelName:name,
        }))
        }}>
        <h4>
        <span className="sidebarChannelHashIcon">#</span>
        {name}
        </h4>
        </div>
    )
}

export default SideBar;