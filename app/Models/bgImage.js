export class bgImage{
    constructor(data){
        this.url = data.url
    }

    get Template(){
        return /*html*/`
        <img class="my-bgimage" src="${this.url}"/>
        `
    }
}