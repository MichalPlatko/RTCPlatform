import React from 'react';
import "../styles/rightsidebar.css";
import {Avatar} from "@material-ui/core";
import DashIcon from '@material-ui/icons/Minimize';

const members=[{user:{role:"Owner",name:"MichalZard",status:"Developing project"}},
{user:{role:"Vips",name:"test",status:"Flexing money"}},
{user:{role:"Vips",name:"Wiciregord",status:"Frost DK ilvl 220"}},
{user:{role:"Plebs",name:"test2",status:"Im so poor"}},
{user:{role:"Plebs",name:"test1",status:"Im so poor"}},
{user:{role:"Owner",name:"test2",status:"overflow test of text,looks like it works"}},
{user:{role:"Plebs",name:"test2",status:"Im so poor"}},
{user:{role:"Plebs",name:"test2",status:"Im so poor"}},
{user:{role:"Plebs",name:"test2",status:"Im so poor"}},
{user:{role:"Plebs",name:"test2",status:"Im so poor"}},
{user:{role:"Plebs",name:"test2",status:"Im so poor"}},
{user:{role:"Plebs",name:"test2",status:"Im so poor"}},
{user:{role:"Plebs",name:"test2",status:"Im so poor"}},
{user:{role:"Plebs",name:"test2",status:"Im so poor"}},
{user:{role:"Plebs",name:"test2",status:"Im so poor"}},
{user:{role:"Plebs",name:"test2",status:"Im so poor"}},
{user:{role:"Plebs",name:"test2",status:"Im so poor"}},
{user:{role:"Plebs",name:"test2",status:"Im so poor"}},
{user:{role:"Plebs",name:"test2",status:"Im so poor"}},
{user:{role:"Plebs",name:"test2",status:"Im so poor"}},
{user:{role:"Plebs",name:"test2",status:"Im so poor"}},
{user:{role:"Plebs",name:"test2",status:"Im so poor"}}
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
        <MemberCategory role="Owner" color="red" />
        <MemberCategory role="Vips" color="pink" />
        <MemberCategory role="Plebs" color="lightgray"/>
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

