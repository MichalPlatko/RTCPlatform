import React,{useEffect} from 'react';
import ReactDOM from 'react-dom';
import "./styles/app.css"
import {CssBaseline} from "@material-ui/core";

import LeftSidebar from "./components/leftsidebar";
import Sidebar from "./components/sidebar";
import Chat from "./components/chat";
import RightSidebar from "./components/rightsidebar";
import LoginPage from "./components/loginpage";

import {useSelector,useDispatch,Provider} from "react-redux";
import {selectUser,login,logout} from "./userSlice";

import storeReducers from "./store";

import {auth} from "./firebaseconfig";

function WrappedAppInRedux(){
  return(
    <Provider store={storeReducers}>
      <App/>
    </Provider>
  )
}

function App(){
    const user=useSelector(selectUser);
    const dispatch=useDispatch();

    useEffect(() => {
     auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        //user logged in 
        dispatch(
        login({
        uid:authUser.uid,
        photo:authUser.photoURL,
        email:authUser.email,
        displayName:authUser.displayName
        }));
      }else{
        dispatch(logout());

      }
     })
    }, [dispatch])
    return(
      <div className="App">
      { user ? (
      <>
      <CssBaseline />
      <LeftSidebar/>
      <Sidebar/>
      <Chat/>
      <RightSidebar/>
      </>
      )
      : (
      <LoginPage/> 
      )
      }
      
      </div>
    )
}

//TODO:ADDED REDUX PROVIDER TO HOLD ONTO STATE,
//https://www.youtube.com/watch?v=zc1loX80TX8&list=WL&ab_channel=CleverProgrammer
//2:40:34 -> setup chat to display message under appropriate selected channel loaded from db

ReactDOM.render(<WrappedAppInRedux/>,document.getElementById('root'));

/**
 * DISCORD THEME COLORS
 * #202225 left panel
 * #2f3136 left sidebar
 * #292b2f profile menu
 * #36393f message box
 * #2f3136 right sidebar
 * #202225 top bar
 */