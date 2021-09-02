import { generateId } from "../Utils/generateId.js";

export class Job{

  constructor(jobData){
    this.id = jobData.id || generateId()
    this.name = jobData.name
    this.salary = jobData.salary
    this.field = jobData.field
    this.img = jobData.img
    this.description = jobData.description
  }

  get CardTemplate(){
    return /*html*/`
    <div class="col-lg-3 mb-4 listing">
    <div class="card">
    <img src="${this.img}" alt="listing image" class="rounded">
    <div class="card-body">
      <h5 class="d-flex justify-content-between">
      <span >${this.name} - ${this.field}</span>
      <span>$ ${this.salary}</span>
      </h5>
          <p>${this.description}</p>
        </div>
      </div>
    </div>
    `
    }


}


