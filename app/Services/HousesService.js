import { ProxyState } from "../AppState.js";
import { House } from "../Models/House.js";


class HousesService {

  addHouse(houseData){
    var testHouse = new House(houseData)
    ProxyState.houses = [...ProxyState.houses, testHouse]
    console.log(ProxyState.houses)
  }
}

export const housesService = new HousesService()