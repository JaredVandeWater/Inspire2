import { ProxyState } from "../AppState.js";
import { Quote } from "../Models/Quote.js";
import { SandBoxAPI } from "../Utils/AxiosService.js";

class QuoteService{
    async getQuote(){
        let res = await SandBoxAPI.get('/quotes')
        console.log(res);
        ProxyState.quote = new Quote(res.data)
        console.log(ProxyState.quote);
    }
}

export const quoteService = new QuoteService()