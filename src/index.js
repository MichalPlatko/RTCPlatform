import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/app.css"
import {CssBaseline} from "@material-ui/core";

import Sidebar from "./components/sidebar";


class App extends React.Component{
  render(){
    return(
      <>
      <CssBaseline />
      <div className="App">
      <Sidebar/>
      </div>

      </>
    )
  }
}

//TODO: REDO LAYOUT TO USE

ReactDOM.render(<App/>,document.getElementById('root'));

/**
 * DISCORD THEME COLORS
 * #2f3136 left panel
 * #2f3136 left sidebar
 * #36393f message box
 * #2f3136 right sidebar
 * #202225 top bar
 */