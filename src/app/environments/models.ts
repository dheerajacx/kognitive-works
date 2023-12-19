export interface Task{
    taskId:string,
    sender:string,
    creationDate:string,
    subject:string,
    workflowStatus:string,
    taskType:string,
    numAttachments:number
}

export interface kanban{
    classified:{
        new:number,
        inprogress:number,
        completed:number
    }[],
    unclassified:number
}