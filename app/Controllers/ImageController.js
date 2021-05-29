import { ProxyState } from "../AppState.js";
import { imageService } from "../Services/ImageService.js";

function _draw(){
    document.getElementById('imageHTML').innerHTML=ProxyState.image.Template
}
export class ImageController{
    constructor(){
        this.getImage()
        ProxyState.on('image', _draw)
    }
    getImage(){
        try {
        imageService.getImage()
        } catch (error) {
            console.error(error.message)
        }
    }
}
