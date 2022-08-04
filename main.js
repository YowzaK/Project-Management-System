import { MainController } from "./MainController.js";
import { ProjectFactory } from "./ProjectFactory.js";
import { Project } from "./Project.js";

let newMainController = new MainController();
newMainController.start();

const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", function(){
    newMainController.search();
});











