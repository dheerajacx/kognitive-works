import { Injectable } from '@angular/core';
import { Task } from 'src/app/environments/models';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  search:string=''
  date:string=''
  NOA:number=-1
  tasktype:string=''
  status:string=''

  constructor() { }

  filterTasks(tasks:Task[]):Task[]{
      if(this.status!=="")
        tasks=tasks.filter(task => task.workflowStatus === this.status)
      if(this.NOA>=0)
        tasks=tasks.filter(task => task.numAttachments === this.NOA)
      if(this.tasktype!=="")
        tasks=tasks.filter(task => task.taskType === this.tasktype)
      if(this.status!=="")
        tasks=tasks.filter(task => task.workflowStatus === this.status)
      if(this.search!=='')
        tasks=tasks.filter(task => task.sender.includes(this.search) || task.subject.includes(this.search))

    return tasks
  }
}


// creationDate
// : 
// "2023-12-15T03:57:20Z"
// numAttachments
// : 
// "2"
// sender
// : 
// "rajesh.vallakulam@acxhange.com"
// subject
// : 
// "TESTING EML FILE SUBJECT"
// taskId
// : 
// "2d5b84c1-8583-4faa-a41b-379bb8f1fcce"
// taskType
// : 
// "Insurance_Application"
// workflowStatus
// : 
// "new"