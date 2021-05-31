
import { ImageController } from "./Controllers/ImageController.js";
import { QuoteController } from "./Controllers/QuoteController.js";
import { TodosController } from "./Controllers/TodosController.js";
import { WeatherController } from "./Controllers/WeatherController.js";


class App {
  todosController = new TodosController()
  weatherController = new WeatherController()
  quoteController = new QuoteController()
  imageController = new ImageController()

}

window["app"] = new App();
