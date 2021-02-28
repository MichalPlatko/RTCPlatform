import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/app.css"
import {CssBaseline} from "@material-ui/core";

import LeftSidebar from "./components/leftsidebar";
import Sidebar from "./components/sidebar";
import Chat from "./components/chat";
import RightSidebar from "./components/rightsidebar";

class App extends React.Component{
  render(){
    return(
      <div className="App">
      <CssBaseline />
      <LeftSidebar/>
      <Sidebar/>
      <Chat/>
      <RightSidebar/>
      </div>
    )
  }
}

//TODO: REDO LAYOUT TO USE

ReactDOM.render(<App/>,document.getElementById('root'));

/**
 * DISCORD THEME COLORS
 * #202225 left panel
 * #2f3136 left sidebar
 * #292b2f profile menu
 * #36393f message box
 * #2f3136 right sidebar
 * #202225 top bar
 */