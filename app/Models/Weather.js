
function capFirstLetters(str){
    return str.toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
}





export class Weather{
    constructor(data){
        this.type = data.weather[0].description
        this.icon = data.weather[0].icon
        this.kelvin = data.main.temp
        this.currentTemp = 0
        this.tempType=0
        this.getK()
        this.letter
    }
    

    getC(){
        this.letter= 'C'
        return (this.currentTemp = (this.kelvin - 273.15) * 9/5 + 32).toFixed(2)
        
    }
    getF(){
        this.currentTemp = (this.getC() * 9/5) + 32
        this.letter='F'
        return this.currentTemp.toFixed(2)
    }

    getK(){
        this.letter='K'
        return (this.currentTemp=this.kelvin).toFixed(2)
    }
    
    
    get Template(){
        return /*html*/ `
        <div class="text-center">
            <h1>${capFirstLetters(this.type)}</h1>
        </div>
        <div class="d-flex">
            <img src="http://openweathermap.org/img/wn/${this.icon}@2x.png"/>
            <button onclick="app.weatherController.changeTempType()" type="button" class="btn"><h1>${this.currentTemp}\u00B0 ${this.letter} </h1></button>
        </div>
        `
    }
    
}