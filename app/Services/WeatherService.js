import { ProxyState } from "../AppState.js";
import { Weather } from "../Models/Weather.js";
import { SandBoxAPI } from "../Utils/AxiosService.js";

class WeatherService{
    async getWeather(){
        let res = await SandBoxAPI.get('/weather')
        ProxyState.weather= new Weather(res.data)
        console.log(ProxyState.weather);
    }

    changeTempType(tempType){
        let w = ProxyState.weather
        w.tempType++
        if (tempType > 2){tempType = 0}
        else if (tempType === 0){w.currentTemp = w.kelvin}
        else if (tempType === 1){w.currentTemp = w.getC()}
        else if (tempType === 2){w.currentTemp = w.getF()}
        console.log(ProxyState.weather.tempType);
        console.log(w.currentTemp);
    }


}

export const weatherService = new WeatherService()