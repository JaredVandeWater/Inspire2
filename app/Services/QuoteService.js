import { ProxyState } from "../AppState.js";
import { Quote } from "../Models/Quote.js";
import { SandBoxAPI } from "../Utils/AxiosService.js";

class QuoteService{
    async getQuote(){
        let res = await SandBoxAPI.get('/quotes')
        ProxyState.quote = new Quote(res.data)
    }
}

export const quoteService = new QuoteService()