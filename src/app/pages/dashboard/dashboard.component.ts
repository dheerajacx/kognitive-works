import { Component } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';
import { TasklistService } from 'src/app/services/tasklist/tasklist.service';

@Component({
  selector: 'acx-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  kanbanData:any
  top10Tasks:any
  constructor(private dashboard:DashboardService,private tasklist:TasklistService){}

  ngOnInit(){
    if(!this.tasklist.tasks)
    this.tasklist.getTaskList().subscribe((response)=>{
      this.tasklist.setTasks(response)
      this.kanbanData=(this.dashboard.getKanbanData(response))
      this.top10Tasks=(this.dashboard.getTop10(response))
    })
    else
    {
      this.kanbanData=(this.dashboard.getKanbanData(this.tasklist.tasks))
      this.top10Tasks=(this.dashboard.getTop10(this.tasklist.tasks))
    }
  }
}
