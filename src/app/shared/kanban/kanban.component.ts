import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ChangeService } from 'src/app/services/change/change.service';
import { FilterService } from 'src/app/services/filter/filter.service';

@Component({
  selector: 'acx-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.css']
})
export class KanbanComponent {
  @Input() kanbanData:any
  tasktypes:any
  selectedType:string=''
  option:boolean=false

  constructor(private change:ChangeService,private filter:FilterService,private route:Router){
  }
  
  ngOnInit(){
    this.tasktypes=localStorage.getItem('kworks_documents')?.split(",")
    this.selectedType=this.tasktypes[0]
  }

  spaceAdder(text:string):string{
    return this.change.textSpaceAdder(text)
  }

  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  settasktype(tasktype:string){
    this.selectedType=tasktype
  }

  toggleOption(){
    this.option=!this.option
  }

  navgiateToTask(status:string,tasktype:string){
    this.filter.status=status
    this.filter.tasktype=tasktype
    console.log(this.filter)
    this.route.navigate(['/tasks'])
  }

}
