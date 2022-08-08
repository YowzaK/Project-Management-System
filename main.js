import { MainController } from "./MainController.js";
import { ProjectFactory } from "./ProjectFactory.js";
import { Project } from "./Project.js";

let newMainController = new MainController();
const submitButton = document.getElementById("submit");

//Waiting until document is loaded
document.addEventListener("DOMContentLoaded", () => {

    //Program initiation
    newMainController.start();

    //Search function in program
    submitButton.addEventListener("click", function () {
        newMainController.search();
    });
});