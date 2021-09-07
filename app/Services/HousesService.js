import { ProxyState } from "../AppState.js";
import { House } from "../Models/House.js";


// @ts-ignore
const api = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/houses"
})
class HousesService {

  async deleteHouse(houseid) {
    await api.delete(houseid)
    ProxyState.houses = ProxyState.houses.filter(h => h.id !== houseid)
  }

  async addHouse(houseData){
    let res = await api.post('', houseData)
    console.log('what was the response?', res)
    ProxyState.houses = [...ProxyState.houses, new House(res.data)]
  }

  async getHouses(){
    let res = await api.get()
    console.log('what was the response??', res)
    ProxyState.houses = res.data.map(h => new House(h))
    console.log('what house', ProxyState.houses)
  }
}

export const housesService = new HousesService()