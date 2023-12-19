import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';
import { WorkspaceService } from 'src/app/services/workspace/workspace.service';

@Component({
  selector: 'acx-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  name:string|null
  role:string|null
  workspace:string|null
  TaskTypes:string[]|undefined
  refreshAnimation:boolean=false

  constructor(private login:LoginService,private router:Router,private _workspace:WorkspaceService){
    this.name=localStorage.getItem('kworks_username')
    this.role=localStorage.getItem('kworks_role')
    this.workspace=localStorage.getItem('kworks_workspace')
    this.TaskTypes=localStorage.getItem('kworks_documents')?.split(",")
  }
  
  logout(){
    this.login.logout()
    this.router.navigate(['/login']);
  }
  
  refresh(){
    this.refreshAnimation=true
    this._workspace.loadWorkspace().subscribe((response)=>{
      localStorage.setItem("kworks_documents",response.documents)
      this.TaskTypes=localStorage.getItem('kworks_documents')?.split(",")
      this.refreshAnimation=false
    })
  }

}
