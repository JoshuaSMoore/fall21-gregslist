import { ProxyState } from "../AppState.js";
import { Job } from "../Models/Job.js";

// @ts-ignore
const api = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/jobs"
})

class JobsService {


  async deleteJob(jobid){
    await api.delete(jobid)

    ProxyState.jobs = ProxyState.jobs.filter(j => j.id !== jobid)
  }


 async addJob(jobData){
    let res = await api.post('', jobData)
    ProxyState.jobs = [...ProxyState.jobs, new Job(res.data)]
    console.log(ProxyState.jobs)
  }


  async getJob(){
    let res = await api.get()
    ProxyState.jobs = res.data.map(j => new Job(j))
  }
}

export const jobService = new JobsService()