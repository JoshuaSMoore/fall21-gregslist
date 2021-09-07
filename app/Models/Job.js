import { generateId } from "../Utils/generateId.js";

export class Job{

  constructor(jobData){
    this.id = jobData.id
    this.jobTitle = jobData.jobTitle
    this.company = jobData.company
    this.rate = jobData.rate
    this.hours = jobData.hours
    this.description = jobData.description
  }

  get CardTemplate(){
    return /*html*/`
    <div class="col-lg-3 mb-4 listing">
    <div class="card">
    <h2 class = text-center>${this.jobTitle}</h2>
    <h4 class = text-center>Company: ${this.company}</h4>
    <div class="card-body text-center">
      <h5 class="text-center">
      <span> Hours: ${this.hours} <br> Rate: ${this.rate}</span>
      </h5>
          <p>${this.description}</p>
          <button class ="btn btn-danger" onclick="app.jobsController.deleteJob('${this.id}')">Delete</button>
        </div>
      </div>
    </div>
    `
    }


}


