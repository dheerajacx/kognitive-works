import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';
import { WorkspaceService } from 'src/app/services/workspace/workspace.service';

@Component({
  selector: 'acx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm : FormGroup = new FormGroup({}) ;
  messageType:boolean=true
  message:string=""

  constructor(private login:LoginService,private formbuilder:FormBuilder,private router:Router,private workspace:WorkspaceService){
    this.loginForm = this.formbuilder.group({
      email : ['', [Validators.required]],
      password : ['', [Validators.required]]
    })
  }
  

  onSubmit(){
    this.message="Logging you in !!!"
    if(this.loginForm.valid){
      this.login.onLogin(this.loginForm.value.email,this.loginForm.value.password).subscribe((response:any)=>{
        if(response.authentication){
          localStorage.setItem("kworks_auth","true")
          localStorage.setItem("kworks_role",response.role)
          localStorage.setItem("kworks_workspace",response.workspace)
          localStorage.setItem("kworks_username",this.loginForm.value.email)
          this.workspace.loadWorkspace().subscribe((response)=>{
            localStorage.setItem("kworks_documents",response.documents)
            this.router.navigate(['/home']);
          })
        }
        else{
          this.messageType=false
          this.message="incorrect username or password"
        }
      })
    }
    else{
      this.messageType=false
      this.message="Parameter missing"
    }
  }
}
