import { Component } from '@angular/core';
import { Task } from 'src/app/environments/models';
import { FilterService } from 'src/app/services/filter/filter.service';
import { TasklistService } from 'src/app/services/tasklist/tasklist.service';

@Component({
  selector: 'acx-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  taskList:Task[]=[]
  displayList:Task[]=[]
  refresh:boolean=false
  loading:boolean=true

  constructor(private tasklist:TasklistService,private filter:FilterService){}

    ngOnInit(){
      if(!this.tasklist.tasks)
      this.getTaskList()
      else
      {
        this.loading=false
        this.taskList=this.tasklist.getFormattedTasks(this.tasklist.tasks)
        this.displayList=this.taskList
      }
    }

  filterData(){
    this.displayList=(this.filter.filterTasks(this.taskList))
  }
  
  getTaskList(){
    this.tasklist.getTaskList().subscribe((response)=>{
      this.tasklist.setTasks(response)
      this.taskList=(this.tasklist.getFormattedTasks(this.tasklist.tasks))
      this.displayList=this.taskList
      this.refresh=false
      this.loading=false
    })
  }

  refreshData(){
    if(this.displayList.length)
    {   
      this.refresh=true
      this.getTaskList()
    }
  }
}
