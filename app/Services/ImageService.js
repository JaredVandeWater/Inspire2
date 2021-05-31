import { ProxyState } from "../AppState.js";
import { bgImage } from "../Models/bgImage.js";
import { SandBoxAPI } from "../Utils/AxiosService.js";

class ImageService{
    async getImage(){
        let res = await SandBoxAPI.get('/images')
        ProxyState.image = new bgImage(res.data)
    }

}

export const imageService = new ImageService()