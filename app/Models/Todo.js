export class Todo{
    constructor(data){
        this.id = data._id
        this.user = data.user
        this.description = data.description
        this.completed = data.completed
    }
    
    get TodoTemplate(){
        return /*html*/`
        <div class="d-flex justify-content-between">
            <input onclick="app.todosController.checkTodo('${this.id}')" type="checkbox" ${this.completed ? "checked" : ""} class="form-check-input" id="exampleCheck1">
            <label class="form-check-label sr-only" for="exampleCheck1">Todo Check</label>
            <li >${this.description}</li>
            <button onclick="app.todosController.removeTodo('${this.id}')" class="btn text-danger p-0">-</button>
        </div>
        `
        // TODO paste todo template
    }
}