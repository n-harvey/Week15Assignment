import React, { Component } from "react";
import ProjectList from './components/ProjectList'
import NewProject from "./components/NewProject";

class Manager extends Component{

    render(){
        return(
            <div className="container">
                <ProjectList />
            </div>
        )
    }
}

export default Manager