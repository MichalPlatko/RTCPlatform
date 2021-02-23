import React from "react";
import {Grid,Avatar} from "@material-ui/core";
import AccountIcon from '@material-ui/icons/AccountCircleSharp';
import AddIcon from '@material-ui/icons/AddSharp';

const classes={
    avatar:{margin:15,backgroundColor:"lightblue"},
    icon:{margin:15,color:"gray",fontSize:40},
    add:{margin:20,color:"green",fontSize:30},
}

//left bar #202225
//2nd left bar #2f3136
//main #36393f
//scrollbar #2e3338
//right bar #2f3136
//font #8e927e
//ctrls #b9bbbe
export default class Content extends React.Component{
    render(){
    return(
       <>
        <Grid container direction="row" style={{width:"100vw",height:"100vh"}}>
        <ProfilePanelContainer/>
        <ControlPanelContainer/>
        <ContentContainer/>
        <MemberListContainer/>
        </Grid>
       </> 
    )
    }
}

//shows server icons,friends (all of active dms)
class ProfilePanelContainer extends React.Component{
    render(){
        return(
        <>
        <Grid item  xs={1} style={{backgroundColor:"#202225",height:"100vh"}}>
        <AccountIcon style={classes.icon}/>
        <Avatar style={classes.avatar}>M</Avatar>
        <Avatar style={classes.avatar}>I</Avatar>
        <Avatar style={classes.avatar}>C</Avatar>
        <Avatar style={classes.avatar}>H</Avatar>
        <Avatar style={classes.avatar}>A</Avatar>
        <Avatar style={classes.avatar}>L</Avatar>
        <AddIcon style={classes.add}/>
        </Grid>
        </>
        )
    }
}

//TODO: on top server name,in middle channel list,User config at bottom

class ControlPanelContainer extends React.Component{
    render(){
        return (
            <Grid xs={1} item style={{backgroundColor:"#2f3136",height:"100vh"}}>
            CONTROL PANEL
            </Grid>
        )
    }
}

class ContentContainer extends React.Component{
    render(){
        return(
            <Grid item xs={9} zeroMinWidth style={{backgroundColor:"#36393f",width:"80vw",height:"100vh"}}>
            MESSAGES
            </Grid>
        )
    }
}

class MemberListContainer extends React.Component{
    render(){
        
        return(
            <Grid item xs={1} style={{backgroundColor:"#2f3136",width:200,height:"100vh"}} >
            MEMBER LIST
            </Grid>
        )
    }
}