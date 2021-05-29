export class Quote{
    constructor(data){
        this.quote = data.content
        this.author = data.author
    }

    get Template(){
        return /*html*/`
        <button class="btn my-quote" onclick="app.quoteController.getQuote()"><h3>${this.quote}</h3></button>
        <h5 class="my-author">${this.author}</h5>
        `
    }
}