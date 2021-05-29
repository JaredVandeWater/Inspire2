import { ProxyState } from "../AppState.js";
import { quoteService } from "../Services/QuoteService.js";

function _draw(){
    document.getElementById('quoteHTML').innerHTML=ProxyState.quote.Template
}
export class QuoteController{
    constructor(){
        this.getQuote()
        ProxyState.on('quote', _draw)
    }


    getQuote(){
        try {
            quoteService.getQuote()
        } catch (error) {
            console.error(error.message)
        }
    }
}
