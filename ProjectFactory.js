import { Project } from "./Project.js";
import myJson from './projects.json' assert {type: 'json'};


export class ProjectFactory{
    
    

    constructor(){        
        this.project = [];
    }    

    getAllProjects(){       
        for(let i =0; i < myJson.projects.length; i++){
            this.project.push(this.createProject(myJson.projects[i].id, myJson.projects[i].name));
        }        
        return this.project;

    }
    searchProjects(searchTerm){
        return searchTerm;
    }
    
    createProject(id ,name){
        return new Project(id,name); 
    }

    fetchData(){
        



    }
}