import { ProjectFactory } from "./ProjectFactory.js";


export class MainController{
    constructor(){}

    start(){
        var newProjectFactory = new ProjectFactory;
        console.log(newProjectFactory.getAllProjects());
    }

    showMessage(message){
        document.getElementById("message").innerHTML=message;
        document.getElementById("message").style.display = "block";
    }
    hideMessage(){
        document.getElementById("message").innerHTML="";
        document.getElementById("message").style.display = "none";
    }     
        
}



