import { TodosController } from "./Controllers/TodosController.js";
import { WeatherController } from "./Controllers/WeatherController.js";


class App {
  todosController = new TodosController()
  weatherController = new WeatherController()
}

window["app"] = new App();
