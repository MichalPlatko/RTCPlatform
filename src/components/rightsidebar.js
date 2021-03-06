import React from 'react';
import "../styles/rightsidebar.css";
import {Avatar} from "@material-ui/core";
import DashIcon from '@material-ui/icons/Minimize';

const members=[{user:{role:"Online",name:"testTest",status:"Developing project"}},
{user:{role:"Online",name:"test",status:"Flexing money"}},
{user:{role:"Offline",name:"test2",status:"Im so poor"}}
];

export default function MemberList(){
    return (
        <div className="memberList">
        <MemberCategory role="Online" color="white" />
        <MemberCategory role="Offline" color="gray" />
        </div>
    )
}

function MemberCategory({role,color}){
    //const usersFiltered=this.state.members.filter(member=>member.user.role===this.role);       
    const userFiltered=members.filter(member=>member.user.role===role);
    console.log(userFiltered);
    return(
        <div className="memberCategory" style={{color:color}}>
        <div className="memberCount">{role} <DashIcon/> {userFiltered.length}</div>
        <div className="membersSortedByCategory">
        {/*usersFiltered.map((m,index)=>{*/}
        {
        userFiltered.map((m,index)=>{
        return <Member color={color} key={index} name={m.user.name} status={m.user.status}/>
        })
        }      
        </div>
        </div>
        )
}

function Member({color,name,status}){   
    return(
        <div className="memberAvatar">
        <Avatar/>
        <div className="memberInfo">
        <h4 style={{color:color}}>{name}</h4>
        <p>{status}</p>
        </div>
        </div> 
    )
}

//TODO: 2 Categories Online,Offline,display users that are currently 
//online when they sign in and when they sign off or close the app show them as offline
//https://firebase.google.com/docs/firestore/solutions/presence