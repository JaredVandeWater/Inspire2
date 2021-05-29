import { ProxyState } from "../AppState.js";
import { Weather } from "../Models/Weather.js";
import { SandBoxAPI } from "../Utils/AxiosService.js";

class WeatherService{
    async getWeather(){
        let res = await SandBoxAPI.get('/weather')
        ProxyState.weather= new Weather(res.data)
    }

    changeTempType(){
        let w = ProxyState.weather
        w.tempType++
        if (w.tempType > 2){
            w.tempType = 0
            w.currentTemp = w.getK()
        }
        else if (w.tempType === 1){w.currentTemp = w.getC()}
        else if (w.tempType === 2){w.currentTemp = w.getF()}
        ProxyState.weather = ProxyState.weather

    }


}

export const weatherService = new WeatherService()