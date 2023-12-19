import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/environments/models';
import { ChangeService } from 'src/app/services/change/change.service';

@Component({
  selector: 'acx-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent {
  @Input() tasks:Task[]=[]

  constructor(private change:ChangeService,private route:Router){}

  spaceAdder(text:string):string{
    return this.change.textSpaceAdder(text)
  }

  formatDate(date:string):string{
    return this.change.dateFormatChanger(date)
  }

  returnaCircleColor(status:string):any{
    if(status==="new")
    {
      return {
        'backgorund-color':'red'
      }
    }
  }

  navigateToTask(taskId:string){
    console.log(taskId)
    this.route.navigate(['/tasks/'+taskId])
  }
}

