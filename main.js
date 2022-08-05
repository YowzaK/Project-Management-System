import { MainController } from "./MainController.js";
import { ProjectFactory } from "./ProjectFactory.js";
import { Project } from "./Project.js";

let newMainController = new MainController();
const submitButton = document.getElementById("submit");

document.addEventListener("DOMContentLoaded", ()=>{
    
    newMainController.start();
    submitButton.addEventListener("click", function(){
        newMainController.search();
    });
});