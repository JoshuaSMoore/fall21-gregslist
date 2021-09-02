import { ProxyState } from "../AppState.js"
import { getJobFormTemplate } from "../forms/jobform.js"
import { jobService } from "../Services/JobsService.js"



function _drawJobs() {
  let template = ''

  ProxyState.jobs.forEach(jobs => template += jobs.CardTemplate)
  document.getElementById('listings').innerHTML = template
}

export class JobsController {
  constructor() {
    ProxyState.on('jobs', _drawJobs)
  }
  
  addJob() {
    event.preventDefault() 
    /**
     * @type {HTMLFormElement}
     */
    // @ts-ignore
    const form = event.target
   
    const jobData = {
      name: form.name.value,
      field: form.field.value,
      salary: form.salary.value,
      description: form.description.value,
      img: form.img.value,
    }
    try {
      jobService.addJob(jobData)
    } catch (e) {
      form.make.classList.add('border-danger')
      console.error('testing')
      return
    }

    form.reset()

  }


  showJobs() {
    _drawJobs()
    document.getElementById('controls').innerHTML = `
      <button class="btn btn-success" onclick="app.jobsController.toggleJobForm()">Add Job</button>
    `
 
    document.getElementById('forms').innerHTML = getJobFormTemplate()
  }
  
  toggleJobForm() {
    document.getElementById('job-form').classList.toggle('visually-hidden')
  }

}