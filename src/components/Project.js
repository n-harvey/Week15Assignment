import React, { useEffect, useState } from "react";
import {NewProject} from './NewProject'
import { managerApi } from "../rest/ManagerApi";
import TeamMembers from "./TeamMembers"

export const Project = (props) => {
    const { project, deleteProject, updateProject,} = props
    const [style, setStyle] = useState("")


    
    const changeStyle = () => {
        console.log('complete project')
        setStyle('completed')
        project.complete = true
        updateProject(project)
    }
    if(!project.complete)
    {
        console.log('rendering projects')
        return(
            <div className={style}>
                <div id={project.key} key={project.key} className="mb-3 pb-3">
                    <div className="row shadow border pb-3">
                        <div className="col">
                            <h2>{project.name}</h2>
                        </div>
                        <div className="col text-center pt-2">
                            <button className="btn btn-success" onClick={changeStyle}>Complete Project</button>
                            <button className="btn btn-danger" onClick={(e) => deleteProject(project._id)}>Remove Project</button>
                        </div>
                        <div>
                            <p>Project Lead: {project.lead}</p>
                            <p>Project Due Date: {project.date}</p>
                        </div>
                        <TeamMembers project={project} updateProject={updateProject}/>
                    </div>
                </div>
            </div>
        )
    }
    else{
        console.log('rendering projects')
        return(
            
                <div id={project.key} key={project.key} className="mb-3 pb-3 row shadow border">
                    <div className="completed row">
                        <div className="col">
                            <h2>{project.name}</h2>
                        </div>
                        <div className="col text-center">
                            <p className="text text-success">Project Completed</p>
                        </div>
                        <div>
                            <p>Project Lead: {project.lead}</p>
                            <p>Project Due Date: {project.date}</p>
                        </div>
                        <TeamMembers project={project} updateProject={updateProject} />   
                        </div>                 
                        <div>
                        <button className="btn btn-danger" onClick={(e) => deleteProject(project._id)}>Remove Project</button>
                    </div>
                </div>
        )

    }
}
