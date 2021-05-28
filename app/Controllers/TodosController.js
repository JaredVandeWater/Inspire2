import { ProxyState } from "../AppState.js"
import { todosService } from "../Services/TodosService.js"

function _draw(){
    let template = ''
    ProxyState.todos.forEach(t => {
        template += t.TodoTemplate
    });

    document.getElementById('TodosHTML').innerHTML=template

}

export class TodosController{
    constructor(){
        this.getTodos()
        ProxyState.on('todos', _draw)
    }

    getTodos(){
        try {
            todosService.getTodos()
        } catch (error) {
           console.error(error.message) 
        }

    AddTodo(){}
}}