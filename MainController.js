import { ProjectFactory } from "./ProjectFactory.js";


export class MainController{
    constructor(){

    }

    start(){

        this.showMessage('Loading..');

        var newprojectFactory = new ProjectFactory;
        let arr =  newprojectFactory.getAllProjects(); 
        var projectlistView = document.getElementById("projects");
        
        arr.forEach(element => {
            var node = document.createElement('li');
            node.appendChild(document.createTextNode(element['name']));
            projectlistView.appendChild(node);
        });

        this.hideMessage();

    }

    search(){

        const term = document.getElementById('term').value;

        var newprojectFactory = new ProjectFactory;
        let arr = newprojectFactory.searchProjects(term);

        console.log(arr);
    }
    showMessage(message){
        const msgView = document.getElementById('message');
        msgView.innerHTML = message;
        msgView.style.display='block';
    }
    hideMessage(){
        const msgView = document.getElementById('message');
        msgView.innerHTML = '';
        msgView.style.display='none';
    }     
        
}



