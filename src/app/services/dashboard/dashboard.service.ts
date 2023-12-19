import { Injectable } from '@angular/core';
import { TasklistService } from '../tasklist/tasklist.service';
import { Task, kanban } from 'src/app/environments/models';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  getKanbanData(data:any){
    var kanbanData:any
    var unclassified=0
    const docTypes=localStorage.getItem('kworks_documents')?.split(",")
    if(docTypes)
    {
      let keysArray: string[] = docTypes

      let resultObject: { [key: string]: { name:String,new: number, completed: number, inprogress: number } } = {};

      keysArray.forEach(key => {
        resultObject[key] = {
          name:key,
          new: 0,
          completed: 0,
          inprogress: 0
        };
      });

      data.map((task:any)=>{
        if(task.inference.documentType==="Miscellaneous")
        unclassified+=1
        else{
          if(task.workflowStatus==="new")
          resultObject[task.inference.documentType].new+=1
          if(task.workflowStatus==="in-progress")
          resultObject[task.inference.documentType].inprogress+=1
          if(task.workflowStatus==="completed")
          resultObject[task.inference.documentType].completed+=1
        }
      })
      kanbanData=resultObject
    }
    return {
      classified:kanbanData,
      unclassified:unclassified
    }
  }

  getTop10(data:any):Task[]{
    var Top10:Task[]=[]

    data.sort((a:any,b:any)=>{
      if(a.creationDate<b.creationDate) {
        return 1; 
      } else if (a.creationDate > b.creationDate) {
        return -1; 
      } else {
        return 0; 
      }
    })

    data=data.slice(0,10)

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

      Top10.push(singleTask)
    })

    return Top10
  }
}
