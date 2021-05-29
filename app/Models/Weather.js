let tempType = 0

export class Weather{
    constructor(data){
        this.type = data.weather[0].main
        this.icon = data.weather[0].icon
        this.kelvin = parseInt(data.main.temp)
        this.currentTemp = this.kelvin
    }
    
    getC(){
        return (this.kelvin- 273.15) * 9/5 + 32
        
    }
    getF(){
        return (getC() * 9/5) + 32
    }
    
    
    get Template(){
        return /*html*/ `
        <div class="d-flex">
        <img src="http://openweathermap.org/img/wn/${this.icon}@2x.png"/>
        <button onclick="app.weatherController.changeTempType(${tempType})" type="button" class="btn"><h1>${this.currentTemp}</h1></button>
        </div>
        `
    }
    
}