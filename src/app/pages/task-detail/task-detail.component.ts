import { Component } from '@angular/core';

@Component({
  selector: 'acx-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent {
  activeTab="related"

  setTab(tab:string){
    this.activeTab=tab
  }

}
