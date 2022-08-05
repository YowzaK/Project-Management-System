import { Project } from "./Project.js";


export class ProjectFactory {



    constructor() {
        this.project = [];
    }

    async getAllProjects() {
       
        let jsonRes;

        let response = await fetch("./projects.json"); 
        jsonRes = await response.json();

        for(let i =0; i < jsonRes.projects.length; i++){
            this.project.push(this.createProject(jsonRes.projects[i].id, jsonRes.projects[i].name));
        }        

        return this.project;
    }

    searchProjects(searchTerm) {
        let filtered = [];
        this.project.forEach(element => {
            let pName = element.name;

            if (pName.toLowerCase().search(searchTerm.toLowerCase()) >= 0) {
                filtered.push(element);
            }
        });
        return filtered;
    }

    createProject(id, name) {
        return new Project(id, name);
    }
}