import { ProxyState } from "../AppState.js"
import { Todo } from "../Models/Todo.js";
import { SandBoxAPI } from "../Utils/AxiosService.js"


class TodosService{
    async getTodos(){
        let res = await SandBoxAPI.get('jared/todos')
        ProxyState.todos = res.data.map(t => new Todo(t))
        this.updateCount()
    }

    async addTodo(newTodo){
        let res = await SandBoxAPI.post('jared/todos', newTodo)
        ProxyState.todos = [...ProxyState.todos, new Todo(res.data)]
        this.updateCount()
    }

    async removeTodo(id){
        await SandBoxAPI.delete(`jared/todos/${id}`)
        ProxyState.todos = ProxyState.todos.filter(t => t.id != id)
        this.updateCount()
    }

    async checkTodo(id){
        let Todo = ProxyState.todos.find(t => t.id === id)
        Todo.completed = !Todo.completed
        await SandBoxAPI.put(`jared/todos/${id}`, Todo)
        this.updateCount()
    }
    updateCount(){      
        let t =`${ProxyState.todos.filter(t => t.completed===true).length}/${ProxyState.todos.length}` 
        document.getElementById("todosCountHTML").innerText = t
    }

}

export const todosService = new TodosService()