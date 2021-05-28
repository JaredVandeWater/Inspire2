import { ProxyState } from "../AppState.js";
import { Weather } from "../Models/Weather.js";
import { SandBoxAPI } from "../Utils/AxiosService.js";

class WeatherService{
    async getWeather(){
        let res = await SandBoxAPI.get('/weather')
        ProxyState.weather= new Weather(res.data)
        console.log(ProxyState.weather);
    }


}

export const weatherService = new WeatherService()