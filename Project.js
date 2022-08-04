export class Project{
    constructor(id,name){
        this.id = id;
        this.name = name;
    }

    getID(){
        return this.id;
    }

    getName(){
        return this.name;
    }

    setID(id){
        this.id = id;
    }

    setName(name){
        this.name = name;
    }

}