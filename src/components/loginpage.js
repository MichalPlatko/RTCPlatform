import React from 'react'
import "../styles/login.css";
import {Button} from "@material-ui/core";
import {auth,provider} from "../firebaseconfig";

class LoginPage extends React.Component{
    signIn=()=>{
    auth.signInWithRedirect(provider)
    .catch(error=>alert(error.message));
    }
    render(){
    return (
        <div className="login">
        <div className="login_logo" > <img></img> </div>
        <Button  onClick={this.signIn}>Sign in</Button>
        </div>
    )}
}

export default LoginPage;
