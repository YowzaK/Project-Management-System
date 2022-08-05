import { ProjectFactory } from "./ProjectFactory.js";


export class MainController {

    constructor() {
        this.ProjectFactory = ProjectFactory;
    }

    start() {

        this.showMessage('Loading..');
        var newprojectFactory = new ProjectFactory;
        let arr = newprojectFactory.getAllProjects();
        var projectlistView = document.getElementById("projects");
        this.hideMessage();
        this.fillList(arr);
    }

    search() {
        this.showMessage("Searching..");
        const term = document.getElementById('term').value;
        var newprojectFactory = new ProjectFactory;
        let arr = [];
        this.hideMessage();
        if (term.length === 0) {
            this.clearList();
            arr = newprojectFactory.getAllProjects();
        } else {
            arr = newprojectFactory.searchProjects(term);
        }
        this.fillList(arr);
    }

    fillList(arr) {
        var projectlistView = document.getElementById("projects");
        if (arr.length === 0) {
            this.showMessage("No result found..");
            this.clearList();
        } else {
            arr.forEach(element => {
                var node = document.createElement('li');
                node.appendChild(document.createTextNode(element['name']));
                projectlistView.appendChild(node);
            });
        }
    }

    clearList() {
        var projectlistView = document.getElementById("projects");
        var child = projectlistView.lastElementChild;
        while (child) {
            projectlistView.removeChild(child);
            child = projectlistView.lastElementChild;
        }
    }

    showMessage(message) {
        const msgView = document.getElementById('message');
        msgView.innerHTML = message;
        msgView.style.display = 'block';
    }
    hideMessage() {
        const msgView = document.getElementById('message');
        msgView.innerHTML = '';
        msgView.style.display = 'none';
    }

}



