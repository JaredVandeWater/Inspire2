import { QuoteController } from "./Controllers/QuoteController.js";
import { TodosController } from "./Controllers/TodosController.js";
import { WeatherController } from "./Controllers/WeatherController.js";


class App {
  todosController = new TodosController()
  weatherController = new WeatherController()
  quoteController = new QuoteController()
}

window["app"] = new App();
