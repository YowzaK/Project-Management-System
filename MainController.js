import { ProjectFactory } from "./ProjectFactory.js";


export class MainController{
    constructor(){}

    start(){
        var newProjectFactory = new ProjectFactory;
        console.log(newProjectFactory.getAllProjects());
    }
    showMessage(message){}
    hideMessage(){}     
        
}



