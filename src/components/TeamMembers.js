import React, { Component } from "react";

class TeamMembers extends Component{
    constructor(props){
        super(props)
        this.state = {
            members: this.props.project.members.map((member) => member.name),
            input: ''
        }
    }

    handleChange = (e) => {
        this.setState({input: e.target.value})
    }

    addMember = async() => {
        let member = this.state.input
        if(member !== ''){
        this.props.project.members.push({name: member})
        this.props.updateProject(this.props.project)
        this.setState({input: ''})
        console.log(this.props.project.members)
        console.log(this.state.members)
        this.setState({members: this.props.project.members.map((member) => member.name)})
        }
    }

    removeMember(index){
        this.props.project.members.splice(index,1)
        this.props.updateProject(this.props.project)
        this.setState({members: this.props.project.members.map((member) => member.name)})
    }


    render(){
        console.log('rendering team members')
        if(!this.props.project.complete){
        return(
            <div className="row">
            <div id="team-members">
                <h6>Team Members:</h6>
                {this.state.members.map((member, index) => {
                    return([
                        <React.Fragment key={index}>
                        <button className="btn btn-danger me-2 mb-1" onClick={() => this.removeMember(index)}>-</button>{member}<br></br>
                        </React.Fragment>
                    ])
                })}
            </div>
            <div className="col-sm">
                <input type="text" placeholder="Team Member" onChange={this.handleChange} value={this.state.input} /> <br />
                <button type="submit" className="btn btn-sm btn-success mt-1" onClick={() => this.addMember()} >Add Team Member</button>
            </div>
        </div>
        )
    }
    else{
        return(
        <div className="row">
        <div id="team-members">
            <h6>Team Members:</h6>
            {this.state.members.map((member, index) => {
                return([
                    <React.Fragment key={index}>
                    {member}<br></br>
                    </React.Fragment>
                ])
            })}
        </div>
    </div>
        )
    }
}
}

export default TeamMembers