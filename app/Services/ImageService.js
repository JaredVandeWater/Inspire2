import { ProxyState } from "../AppState.js";
import { bgImage } from "../Models/bgImage.js";
import { SandBoxAPI } from "../Utils/AxiosService.js";

class ImageService{
    async getImage(){
        let res = await SandBoxAPI.get('/images')
        console.log(res.data);
        ProxyState.image = new bgImage(res.data)
        console.log(ProxyState.image);
    }

}

export const imageService = new ImageService()