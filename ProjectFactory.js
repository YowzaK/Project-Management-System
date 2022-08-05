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
        let filtered = [];
        this.project.forEach(element => {
            let pName = element.name;

            if(pName.toLowerCase().search(searchTerm.toLowerCase()) >= 0){
                filtered.push(element);
            }
        });
        return filtered;
    }
    
    createProject(id ,name){
        return new Project(id,name); 
    }

    fetchData(){
        



    }
}