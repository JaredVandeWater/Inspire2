export class Todo{
    constructor(data){
        this.id = data._id
        this.user = data.user
        this.description = data.description
        this.completed = data.completed
    }
    
    get TodoTemplate(){
        return /*html*/`
        <div class="d-flex justify-content-between ml-2">
            <input onclick="app.todosController.checkTodo('${this.id}')" type="checkbox" ${this.completed ? "checked" : ""} class="form-check-input" id="exampleCheck1">
            <label class="form-check-label sr-only" for="exampleCheck1">Todo Check</label>
            <li class="my-list-t mb-2">${this.description}</li>
            <i class="fas fa-minus cursor-point text-danger my-auto" onclick="app.todosController.removeTodo('${this.id}')"></i>
        </div>
        `
        // TODO paste todo template
    }
}