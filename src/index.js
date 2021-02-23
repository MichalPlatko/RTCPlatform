import React from 'react';
import ReactDOM from 'react-dom';
import {CssBaseline} from "@material-ui/core";

import CustomTopPanel from "./components/CustomTopPanel";
import ProfilePanel from "./components/Content";


class App extends React.Component{
  render(){
    return(
      <>
      <CssBaseline />
      <CustomTopPanel/>
      <ProfilePanel/>
      </>
    )
  }
}

//TODO: REDO LAYOUT TO USE

ReactDOM.render(<App/>,document.getElementById('root'));

