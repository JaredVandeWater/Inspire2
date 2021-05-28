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
        }}

    addTodo(event){
        try {
            event.preventDefault()
            let form = event.target
            let newTodo = {
                description: form.description.value
            }

            todosService.addTodo(newTodo)
        } catch (error) {
            console.error(error.message)
        }
    }
    removeTodo(id){
        try {
            todosService.removeTodo(id)
        } catch (error) {
            console.error(error.message)
        }
    }
    checkTodo(id){
    try {
        todosService.checkTodo(id)
    } catch (error) {
        console.error(error.message)
    }
}
}