export class Weather{
    constructor(data){
        this.type = data.weather[0].main
        this.icon = `http://openweathermap.org/img/wn/${data.weather.icon}@2x.png`
        this.temp = data.main.temp
    }

    get Template(){
        return /*html*/ `
        
        `
    }

}