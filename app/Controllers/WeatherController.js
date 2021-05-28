
import { ProxyState } from "../AppState.js"
import { weatherService } from "../Services/WeatherService.js"



function _draw(){
    template = ''
    
}
export class WeatherController{
    constructor(){
        this.getWeather()
        ProxyState.on('weather',_draw)
    }

    getWeather(){
        try {
            weatherService.getWeather()
        } catch (error) {
            console.error(error.message)
        }
    }
}