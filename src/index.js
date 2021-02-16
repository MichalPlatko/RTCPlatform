import React from 'react';
import ReactDOM from 'react-dom';
import {withStyles} from "@material-ui/core/styles";
import {Grid,Paper,CssBaseline,Typography} from "@material-ui/core";

const WhiteFont=withStyles({
  root:{
    color:"white",
  }
})(Typography);

class App extends React.Component{
  render(){
    return(
      <Grid container style={{backgroundColor:"gray"}}>
        <CssBaseline/>
        <Grid item xs={1}>
        <Paper style={{backgroundColor:"#202225",height:"100vh",color:"white"}}>Left Menu</Paper>
        </Grid>
        <Grid item xs={1}>
        <Paper style={{backgroundColor:"#2f3136",height:"100vh",width:200,color:"white"}}>Left Menu 2</Paper> 
        </Grid>
        <Grid item xs={8}>
        <Paper style={{backgroundColor:"#36393f",height:"100vh",color:"white"}}> MAIN Screen</Paper> 
        </Grid>
        <Grid item xs={2}>
        <Paper style={{backgroundColor:"#2f3136",height:"100vh",color:"white"}}>Right Menu</Paper> 
        </Grid>
      </Grid>
      
    )
  }
}

//TODO:grid layout (discord like)
//look into <Grid container direction="collum and row">

ReactDOM.render(<App/>,document.getElementById('root'));

//left bar #202225
//2nd left bar #2f3136
//main #36393f
//scrollbar #2e3338
//right bar #2f3136