import React from "react";
import {Grid} from "@material-ui/core";
import CheckBoxIcon from '@material-ui/icons/CheckBoxOutlineBlankSharp';
import Close from "@material-ui/icons/CloseSharp";
import MinimizeIcon from '@material-ui/icons/MinimizeSharp';
const remote = window.require('electron').remote;

function getWindow(){
return remote.getCurrentWindow();
}

const style={
    icons:{color:"#b9bbbe",fontSize:18,margin:4,padding:2},
}

function setBgColor(event,color){
if(event && color) event.target.style.background=color;
else return;
}

export default class CustomTopPanel extends React.Component{
    render(){
        return(
            <>
            <Grid container direction="column" alignItems="flex-end" style={{backgroundColor:"#202225"}}>
            <Grid item>
            <MinimizeIcon onClick={()=>{getWindow().minimize();}} onMouseOver={(e)=>{setBgColor(e,"gray");}} onMouseLeave={(e)=>{setBgColor(e,"none");}} style={style.icons}/>
            <CheckBoxIcon onClick={()=>{getWindow().setFullScreen(!getWindow().isFullScreen())}} onMouseOver={(e)=>{setBgColor(e,"gray");}} onMouseLeave={(e)=>{setBgColor(e,"none");}} style={style.icons}/>
            <Close onClick={()=>{getWindow().close();}} onMouseOver={(e)=>{setBgColor(e,"red");}} onMouseLeave={(e)=>{setBgColor(e,"none");}} style={style.icons}/>
            </Grid>
            </Grid>
            </>
        )
    }
}