import React from 'react'
import "../styles/chat.css";
import {TextField,Tooltip,Avatar} from "@material-ui/core";
import PeopleIcon from '@material-ui/icons/PeopleSharp';
import HelpIcon from '@material-ui/icons/HelpSharp';
import NotificationsIcon from '@material-ui/icons/NotificationsSharp';
import NotificationsOffIcon from '@material-ui/icons/NotificationsOffSharp';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import GifIcon from '@material-ui/icons/Gif';
import AddCircleIcon from '@material-ui/icons/AddCircleSharp';


class Chat extends React.Component {
    constructor(props){
        super(props);
        this.state={off:false};
    }
    toggleNotifications=()=>{
    if(this.state.off)this.setState({off:false});
    else this.setState({off:true});
    }
    render(){
        return (
        <div className="chat">
        <div className="chat_header">
        <h3>Current Text Channel</h3>
        <div className="chat_header_icons">
        {this.state.off ?
        <Tooltip title="Click to unmute">
        <NotificationsOffIcon onClick={()=>{this.toggleNotifications()}}/> 
        </Tooltip>
        :
        <Tooltip title="Click to mute">
         <NotificationsIcon onClick={()=>{this.toggleNotifications()}}/>
        </Tooltip>
        }
        <Tooltip title="Member List">
        <PeopleIcon/>
        </Tooltip>
        <Tooltip title="Help">
        <HelpIcon/>
        </Tooltip>

        </div>
        </div>

        <div className="chat_messages">
        <ChatMessage/>
        <ChatMessage/>
        <ChatMessage/>
        <ChatMessage/>
        <ChatMessage/>
        <ChatMessage/>
        <ChatMessage/>
        <ChatMessage/>
        <ChatMessage/>
        <ChatMessage/>
        <ChatMessage/>
        <ChatMessage/>
        <ChatMessage/>
        <ChatMessage/>
        <ChatMessage/>
        <ChatMessage/>
        </div>
        
        <div className="chat_input">
        <AddCircleIcon/>
        <TextField fullWidth  multiline={true} rowsMax={2} variant="filled" label="Message #TextChannel" InputLabelProps={{style:{color:"gray"}}} inputProps={{style:{color:"white"}}}/>
        <GifIcon/>
        <EmojiEmotionsIcon/>        
        </div>
        </div>
    )
    }
}



class ChatMessage extends React.Component{
    constructor(props){
    super(props);
    this.timestampOptions={day:"numeric",month:"numeric",year:"numeric"};
    this.timestamp=`${new Date().toLocaleTimeString("eu",this.timestampOptions)}`
    }
render(){
    return (
        <div className="chat_message">
        <Avatar/>
        <div className="message_info">
        <h4>UserName
        <span className="chat_timestamp">{this.timestamp}</span>
        </h4>
        <p>test message</p>
        </div>
        </div>
    )
}
}

export default Chat;
