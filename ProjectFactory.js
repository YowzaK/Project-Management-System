import { Project } from "./Project.js";


export class ProjectFactory {

    constructor() {
        this.projectList = [];
    }

    //Used to get all projects
    async getAllProjects() {

        let jsonRes;
        let response = await fetch("./projects.json");
        jsonRes = await response.json();
        //await new Promise(r => setTimeout(r, 5000));
        for (let i = 0; i < jsonRes.projects.length; i++) {
            this.projectList.push(this.createProject(jsonRes.projects[i].id, jsonRes.projects[i].name));
        }

        return this.projectList;

    }

    //Funtion used to search
    async searchProjects(searchTerm) {

        let filteredProjects = [];
        this.projectList.forEach(element => {
            let pName = element.name;
            if (pName.toLowerCase().search(searchTerm.toLowerCase()) >= 0) {
                filteredProjects.push(element);
            }
        });
        //await new Promise(r => setTimeout(r, 5000));
        return filteredProjects;

    }

    //Function used to create project object
    createProject(id, name) {
        return new Project(id, name);
    }
}