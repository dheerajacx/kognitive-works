import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIUrls } from 'src/app/environments/data';
import { Task } from 'src/app/environments/models';

@Injectable({
  providedIn: 'root'
})
export class TasklistService {
  tasks:any

  constructor(private http:HttpClient) { }

  setTasks(tasks:any){
    this.tasks=tasks
  }

  getTaskList():Observable<object>{
    const workspace=localStorage.getItem('kworks_workspace')
    const getTaskListUrl=`${APIUrls.getTaskList}assignedTo=${workspace}%23none`
    return this.http.get(getTaskListUrl)
  }

  getFormattedTasks(data:any):Task[]{
    var formattedTasks:Task[]=[]

    data.sort((a:any,b:any)=>{
      if(a.creationDate<b.creationDate) {
        return 1; 
      } else if (a.creationDate > b.creationDate) {
        return -1; 
      } else {
        return 0; 
      }
    })

    data.map((task:any)=>{
      const singleTask:Task={
        taskId:task.taskId,
        sender:task.sender,
        creationDate:task.creationDate,
        subject:task.subject,
        workflowStatus:task.workflowStatus,
        numAttachments:task.numAttachments,
        taskType:task.inference.documentType,
      }

      formattedTasks.push(singleTask)
    })

    return formattedTasks
  }
}
