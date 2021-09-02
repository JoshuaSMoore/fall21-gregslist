import { generateId } from "../Utils/generateId.js"

export class House{

  constructor(houseData) {
    this.id = houseData.id || generateId()
    this.address = houseData.address
    this.squareft = houseData.squareft
    this.rooms = houseData.rooms
    this.yearbuilt = houseData.yearbuilt
    this.color = houseData.color
    this.bathrooms = houseData.bathrooms
    this.img = houseData.img
    this.price = houseData.price
    this.description = houseData.description
}

get CardTemplate(){
  return /*html*/`
  <div class="col-lg-3 mb-4 listing">
  <div class="card">
  <img src="${this.img}" alt="listing image" class="rounded">
  <div class="card-body">
    <h5 class="d-flex justify-content-between">
    <span >${this.squareft} - ${this.rooms}</span>
    <span>${this.address} </span>
    <span>$ ${this.price}</span>
    </h5>
        <p>${this.description}</p>
      </div>
    </div>
  </div>
  `
  }

}