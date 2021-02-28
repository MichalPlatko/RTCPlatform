import React from 'react';
import "../styles/rightsidebar.css";
import {Avatar} from "@material-ui/core";
import DashIcon from '@material-ui/icons/Minimize';

const members=[{user:{role:"Owner",name:"MichalZard",status:"Developing project"}},
{user:{role:"Vips",name:"test",status:"Flexing money"}},
{user:{role:"Vips",name:"Wiciregord",status:"Frost DK ilvl 220"}},
{user:{role:"Plebs",name:"test2",status:"Im so poor"}},
];

class MemberList extends React.Component {
    render(){
    return (
        <div className="memberList">
        <MemberCategory role="Owner" color="red" />
        <MemberCategory role="Vips" color="pink" />
        <MemberCategory role="Plebs" color="gray"/>
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
    }
    sortByRole(){
    let sorted=members.filter((m)=>m.user.role===this.role);
    for(let i=0;i<sorted.length;i++){
    return <Member color={this.color} name={sorted[i].user.name} status={sorted[i].user.status} />
    }
    }
    sortedByRoleLength(){
   // console.log(members.filter((m)=>m.user.role===this.role));
    return members.filter((m)=>m.user.role===this.role).length;
    }
    render(){
        return(
            <div className="memberCategory" style={{color:"lightgray"}}>
            {this.role} <DashIcon/> {this.sortedByRoleLength()}
            <div className="membersSortedByCategory">
            <Avatar/>
            {this.sortByRole()}
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
        <div className="memberName" style={{color:this.color}}>
        {this.name}
        <p className="memberStatus">
        {this.status}
        </p>
        </div>
        )
    }
}

