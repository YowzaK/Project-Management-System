import { ProjectFactory } from "./ProjectFactory.js";


export class MainController {
    
    constructor() {
        this.newprojectFactory = new ProjectFactory;
    }

    //JSON file is fetch and return to the user
    async start() {
        this.showMessage('Loading..');
        try {
            this.disableSearch(true);
            let arr = await this.newprojectFactory.getAllProjects();
            this.hideMessage();
            this.fillList(arr);
        } catch (e) {
            this.showMessage("Error with Json file");
        }
        this.disableSearch(false);
    }

    //Function used to filter any project
    async search() {
        this.showMessage("Searching..");
        const term = document.getElementById('term').value;
        this.disableSearch(true);
        this.clearList();
        let arr = await this.newprojectFactory.searchProjects(term);
        this.hideMessage();
        this.fillList(arr);
        this.disableSearch(false);
    }

    //Function used to disable search button and serach bar
    disableSearch(setEnable){
        document.getElementById("term").disabled = setEnable;
        document.getElementById("submit").disabled = setEnable;
    }

    //Fill the list with the results
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

    //Used to clear the list
    clearList() {
        var projectlistView = document.getElementById("projects");
        var child = projectlistView.lastElementChild;
        while (child) {
            projectlistView.removeChild(child);
            child = projectlistView.lastElementChild;
        }
    }

    //Show messages to user
    showMessage(message) {
        const msgView = document.getElementById('message');
        msgView.innerHTML = message;
        msgView.style.display = 'block';
    }

    //Hide the message
    hideMessage() {
        const msgView = document.getElementById('message');
        msgView.innerHTML = '';
        msgView.style.display = 'none';
    }

}



