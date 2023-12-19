import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ChangeService } from 'src/app/services/change/change.service';
import { FilterService } from 'src/app/services/filter/filter.service';

@Component({
  selector: 'acx-filter-data',
  templateUrl: './filter-data.component.html',
  styleUrls: ['./filter-data.component.css']
})
export class FilterDataComponent {
  @Input() refreshAnimation:boolean=false
  filter:boolean=false
  tasktypes:string[]|undefined
  tasktype:boolean=false
  tasktypevalue:string="Task Type"
  dateInput:string=""
  NOAInput:any

  statuses:string[]=['new','in-progress','completed']
  status:boolean=false
  statusvalue:string="status"
  @Output() filterData=new EventEmitter()
  @Output() refreshData=new EventEmitter()

  showSearch:boolean=false

  constructor(private change:ChangeService,private _filter:FilterService){}
  ngOnInit(){
    this.tasktypes=localStorage.getItem('kworks_documents')?.split(",")
    if(this._filter.tasktype!=="")
    this.tasktypevalue=this._filter.tasktype
    if(this._filter.status!=="")
    this.statusvalue=this._filter.status
    this.filterData.emit()
  }

  formatString(text:string):string{
    return this.change.textSpaceAdder(text)
  }

  toggleFilter(){
    this.filter=!this.filter
  }

  toggletasktype(){
    this.tasktype=!this.tasktype
  }

  settasktype(text:string){
    this.tasktypevalue=text
    this.setFilters()
  }

  togglestatus(){
    this.status=!this.status
  }

  setstatus(text:string){
    this.statusvalue=text
    this.setFilters()
  }

  setFilters(){
    //sender and subject search pending

    if(this.dateInput!=="")
    this._filter.date=this.dateInput
    else
    this._filter.date=""
  
    if(this.NOAInput!==undefined)
    this._filter.NOA=this.NOAInput
    else
    this._filter.NOA=-1

    if(this.tasktypevalue!=="Task Type")
    this._filter.tasktype=this.tasktypevalue
    else
    this._filter.tasktype=""

    if(this.statusvalue!=="status")
    this._filter.status=this.statusvalue
    else
    this._filter.status=""

    this.filterData.emit()
    }

    searchInput(event:any){
      this._filter.search=(event.target.value)
      this.filterData.emit()
    }

    refresh(){
      this.refreshData.emit()
    }

}
