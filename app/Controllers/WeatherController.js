
import { ProxyState } from "../AppState.js"
import { weatherService } from "../Services/WeatherService.js"
export class WeatherController{
    constructor(){
        this.getWeather()
    }

    getWeather(){
        try {
            weatherService.getWeather()
        } catch (error) {
            console.error(error.message)
        }
    }
}