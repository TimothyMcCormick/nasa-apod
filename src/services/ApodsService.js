import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"




class ApodsService{
  async getApod(){
    const res = await api.get()
    logger.log('getting apod image', res.data)
    AppState.image = res.data.url
  }
}

export const apodsService = new ApodsService()