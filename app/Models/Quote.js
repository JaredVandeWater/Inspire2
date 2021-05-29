export class Quote{
    constructor(data){
        this.quote = data.content
        this.author = data.author
    }

    get Template(){
        return /*html*/`
        <h3>${this.quote}</h3>
        `
    }
}