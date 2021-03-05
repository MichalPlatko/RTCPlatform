import React, { useState,useEffect} from 'react'
import "../styles/chat.css";
import {TextField,Tooltip,Avatar} from "@material-ui/core";
import PeopleIcon from '@material-ui/icons/PeopleSharp';
import HelpIcon from '@material-ui/icons/HelpSharp';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import GifIcon from '@material-ui/icons/Gif';
import AddCircleIcon from '@material-ui/icons/AddCircleSharp';
import {useSelector} from "react-redux";
import {selectChannelId,selectChannelName} from "../appSlice";
import { selectUser } from '../userSlice';
import db from '../firebaseconfig';
import firebase from "firebase";
import DOMPurify from "dompurify";

export default function Chat(){
        const [chatInput,setChange] = useState("");
        const channelId=useSelector(selectChannelId);
        const channelName=useSelector(selectChannelName);
        const [messages,setMessages]=useState([]);
        const user=useSelector(selectUser);

        const handleInputChange=(e)=>{
        setChange(e.target.value)
        }
        const handleInput=(e)=>{
        if(e.code==="Enter"){
        e.preventDefault();
        if(chatInput.length>0) {
        db.collection("channels").doc(channelId).collection("messages").add({
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            message:DOMPurify.sanitize(e.target.value),
            user:user,
        });
        e.target.value=""; setChange("");
        }
        }
        }

        useEffect(() => {
        if(channelId){
            db.collection("channels")
            .doc(channelId)
            .collection("messages")
            .orderBy("timestamp","asc")
            .onSnapshot((snapshot) => setMessages(snapshot.docs.map((doc)=>doc.data())))
        }   
        }, [channelId]);

        const scrollToBottom=id=>{
        let chat=document.getElementById(id);
        if(chat){
        chat.scrollTop=chat.scrollHeight-chat.clientHeight;
        }
        }

        return (
        <div className="chat">
        <div className="chat_header">
        <h3># {channelName ? channelName : "Select channel"}</h3>
        <div className="chat_header_icons">
        {/* {this.state.off ?
        <Tooltip title="Click to unmute">
        <NotificationsOffIcon onClick={()=>{this.toggleNotifications()}}/> 
        </Tooltip>
        :
        <Tooltip title="Click to mute">
         <NotificationsIcon onClick={()=>{this.toggleNotifications()}}/>
        </Tooltip>
        } */}
        <Tooltip title="Member List">
        <PeopleIcon/>
        </Tooltip>
        <Tooltip title="Help">
        <HelpIcon/>
        </Tooltip>
        
        </div>
        </div>
        
        <div className="chat_messages" id="chat_messages">
        {messages.map((message,i)=>(
        <ChatMessage key={i} id={message.user.uid} photo={message.user.photo} timestamp={message.timestamp} user={message.user} message={message.message}/>
        ))}
        {scrollToBottom("chat_messages")}
        </div>
        
        <div className="chat_input">
        <AddCircleIcon/>
        
        <TextField onKeyPress={handleInput}
        disabled={!channelId}
        onChange={handleInputChange}
        fullWidth multiline={true}
        rowsMax={2} variant="filled"
        label={`Message # ${channelName}`}
        InputLabelProps={{style:{color:"gray"}}}
        inputProps={{style:{color:"white"},minLength:1,maxLength:140}}/>
        
        <GifIcon/>
        <EmojiEmotionsIcon/>        
        </div>
        </div>
    )
}


//TODO:FIX CHAT MESSAGE AND MAP OVER TO DISPLAY MESSAGES FROM SERVER
function ChatMessage({timestamp,user,photo,message}){
    return (
        <div className="chat_message">
        <Avatar src={photo}/>
        <div className="message_info">
        <h4>{user.displayName}
        <span className="chat_timestamp">{new Date(timestamp?.toDate()).toUTCString()}</span>
        </h4>
        <p>{message}</p>
        </div>
        </div>
    )
}

