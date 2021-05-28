import { ProxyState } from "../AppState.js"
import { Todo } from "../Models/Todo.js";
import { SandBoxAPI } from "../Utils/AxiosService.js"


class TodosService{
    async getTodos(){
        let res = await SandBoxAPI.get('jared/todos')
        ProxyState.todos = res.data.map(t => new Todo(t))
    }

    async addTodo(newTodo){
        let res = await SandBoxAPI.post('jared/todos', newTodo)
        ProxyState.todos = [...ProxyState.todos, new Todo(res.data)]
    }

    async removeTodo(id){
        await SandBoxAPI.delete(`jared/todos/${id}`)
        ProxyState.todos = ProxyState.todos.filter(t => t.id != id)
        console.log(ProxyState.todos);
    }
    

}

export const todosService = new TodosService()