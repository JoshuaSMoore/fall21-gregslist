import { ProxyState } from "../AppState.js";
import { Job } from "../Models/Job.js";


class JobsService {

  addJob(jobData){
    var testJob = new Job(jobData)
    ProxyState.jobs = [...ProxyState.jobs, testJob]
    console.log(ProxyState.jobs)
  }
}

export const jobService = new JobsService()