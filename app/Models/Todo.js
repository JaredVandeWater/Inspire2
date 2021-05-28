export class Todo{
    constructor(data){
        this.id = data._id
        this.user = data.user
        this.description = data.description
        this.completed = data.completed
    }
    
    get TodoTemplate(){
        return /*html*/`
        <div>
        <input type="checkbox" ${this.completed ? "checked" : ""} class="form-check-input" id="exampleCheck1">
        <label class="form-check-label sr-only" for="exampleCheck1">Todo Check</label>
        <li class="list-group-item">${this.description}</li>
        </div>
        `
        // TODO paste todo template
    }
}