import React from 'react';
import "../styles/rightsidebar.css";
import {Avatar} from "@material-ui/core";
import DashIcon from '@material-ui/icons/Minimize';

const members=[{user:{role:"Online",name:"testTest",status:"Developing project"}},
{user:{role:"Online",name:"test",status:"Flexing money"}},
{user:{role:"Offline",name:"test2",status:"Im so poor"}}
];

class MemberList extends React.Component {
    constructor(props){
        super(props);
        this.state={
            categories:[],
        }
    }
    render(){
    return (
        <div className="memberList">
        <MemberCategory role="Online" color="white" />
        <MemberCategory role="Offline" color="gray" />
        </div>
    )
    }
}
export default MemberList;

//TODO: DISPLAY CORRECT AMMOUNT OF MEMBERS
class MemberCategory extends React.Component{
    constructor(props){
    super(props);
    this.role=props.role;
    this.color=props.color;
    this.state={
        members:[],
    }
    }
    componentDidMount(){
    this.setState({members:members});
    }
    render(){
        const usersFiltered=this.state.members.filter(member=>member.user.role===this.role);       
        return(
            <div className="memberCategory" style={{color:"lightgray"}}>
            <div className="memberCount">{this.role} <DashIcon/> {usersFiltered.length}</div>
            <div className="membersSortedByCategory">
            {
            usersFiltered.map((m,index)=>{
            return <Member color={this.color} key={index} name={m.user.name} status={m.user.status}/>
            })
            }       
            </div>
            </div>
        )
    }
}

class Member extends React.Component{
    constructor(props){
        super(props);
        this.color=props.color;
        this.name=props.name;
        this.status=props.status;
    }
    render(){
        return(
        <div className="memberAvatar">
        <Avatar/>
        <div className="memberInfo">
        <h4 style={{color:this.color}}>{this.name}</h4>
        <p>{this.status}</p>
        </div>
        </div>
        
        )
    }
}

//TODO: 2 Categories Online,Offline,display users that are currently 
//online when they sign in and when they sign off or close the app show them as offline