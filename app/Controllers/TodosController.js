import { ProxyState } from "../AppState.js"
import { todosService } from "../Services/TodosService.js"
import { clock } from "../Utils/ClockClock.js";

function _draw(){
    let template = ''
    ProxyState.todos.forEach(t => {
        template += t.TodoTemplate
    });

    document.getElementById('TodosHTML').innerHTML=template

}

export class TodosController{
    constructor(){
        //clock()
        this.getTodos()
        ProxyState.on('todos', _draw)
    }
    todosRight(){
        console.log('r - l');
        document.getElementById('my-todo-left').classList.remove('d-none')
        document.getElementById('my-todo-right').classList.add('d-none')
        document.getElementById('listHTML').classList.add('todoListOffScreen')
    }
    todosLeft(){
        console.log('l - r');
        document.getElementById('my-todo-right').classList.remove('d-none')
        document.getElementById('my-todo-left').classList.add('d-none')
        document.getElementById('listHTML').classList.remove('todoListOffScreen')
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
    }}

    updateCount(){
        todosService.updateCount()
    }
}
