import { ProxyState } from "../AppState.js"
import { Todo } from "../Models/Todo.js";
import { SandBoxAPI } from "../Utils/AxiosService.js"


class TodosService{
    async getTodos(){
        let res = await SandBoxAPI.get('jared/todos')
        ProxyState.todos = res.data.map(t => new Todo(t))
    }

}

export const todosService = new TodosService()