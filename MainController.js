import { ProjectFactory } from "./ProjectFactory.js";


export class MainController {

    constructor() {
        this.newprojectFactory = new ProjectFactory;
    }

    async start() {
        this.showMessage('Loading..');
        try {
            let arr = await this.newprojectFactory.getAllProjects();
            this.hideMessage();
            this.fillList(arr);
        } catch (e) {
            this.showMessage("Error with Json file");
        }
    }

    search() {
        this.showMessage("Searching..");
        const term = document.getElementById('term').value;
        let arr = this.newprojectFactory.searchProjects(term);
        this.hideMessage();
        this.fillList(arr);
    }

    fillList(arr) {
        this.clearList();
        var projectlistView = document.getElementById("projects");
        if (arr.length === 0) {
            this.showMessage("No result found..");
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



