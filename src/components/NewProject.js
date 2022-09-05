import React from "react";
import { managerApi } from "../rest/ManagerApi";

export default class NewProject extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            projectName: '',
            lead: '',
            date: '',
        }
    }

    handleNameChange = (e) => {
        let projectName = e.target.value
        this.setState({projectName: projectName})

    }
    handleLeadChange= (e) =>{
        let leadName = e.target.value
        this.setState({lead: leadName})

    }
    handleDateChange = (e) => {
        let date = e.target.value
        this.setState({date: date})

    }
    createProject = () =>{
        const project = {
            name: this.state.projectName,
            lead: this.state.lead,
            date: this.state.date,
            members: [],
            complete: false
        }
        if(project.name !== '' && project.lead !== '' && project.date !== ''){
        this.props.newProject(project)
        }
        this.setState({
            projectName: '',
            lead: '',
            date: ''
        })
    }

    render(){
        return(
            <div id="new-project" className="pb-3">
            <h3>Project Manager</h3>
            <div className="row">
              <div className="col-sm">
                <input type="text" id="project-name" className="form-control" placeholder="Project Name" onChange={this.handleNameChange} value={this.state.projectName}/>
              </div>
              <div className="col-sm">
                <input type="text" id="project-lead" className="form-control" placeholder="Project Lead" onChange={this.handleLeadChange} value={this.state.lead}/>
              </div>
              <div className="col-sm">
                <input type="date" id="project-date" className="form-control" onChange={this.handleDateChange} value={this.state.date}/>
              </div>
            </div>
            <button id="new-project-button" className="btn btn-success form-control mt-1" onClick={this.createProject}>Add {this.state.projectName} Project</button>
          </div>
        )
    }
}