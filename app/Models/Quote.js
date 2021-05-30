export class Quote{
    constructor(data){
        this.quote = data.content
        this.author = data.author
    }

    get Template(){
        return /*html*/`
        <button class="btn my-quote my-blue-font" onclick="app.quoteController.getQuote()">
            <p>${this.quote}</p>
        </button>
        <h5 class="my-author my-blue-font text-center">-${this.author}</h5>
        `
    }
}