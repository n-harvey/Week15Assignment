import React, { Component } from "react";
import { Project } from './Project'
import { managerApi } from '../rest/ManagerApi'
import NewProject from "./NewProject";

export default class ProjectList extends Component{
    state = {
        projects: []
    }

    componentDidMount(){
        console.log(`Component Did Mount`)
        this.fetchProjects()
    }

    fetchProjects = async () => {
        console.log('Fetching')
        const projects = await managerApi.get()
        projects.sort((a,b) => (a.date > b.date) ? 1 : -1)
        this.setState({projects})
        console.log({projects})
    }

    updateProject = async (projectToUpdate) => {
        console.log('updating')
        await managerApi.put(projectToUpdate)
        this.fetchProjects();
    }

    deleteProject = async (projectId) => {
        console.log('deleting')
        await managerApi.delete(projectId)
        this.fetchProjects()
    }

    newProject = async (project) =>{
        console.log('Create New project')
        await managerApi.post(project)
        this.fetchProjects()
    }



    render(){
        console.log('render project list')
        return(
            <div>
                <NewProject newProject={this.newProject}/>
                {this.state.projects.map((project) => (
                    <Project
                        project={project}
                        key={project._id}
                        updateProject={this.updateProject}
                        deleteProject={this.deleteProject}
                    />))}
            </div>
        )
    }
}