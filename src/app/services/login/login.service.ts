import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIUrls } from 'src/app/environments/data';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  onLogin(email:string,password:string):Observable<any>{
    const loginUrl=`${APIUrls.login}username=${email}&password=${password}`
    return this.http.get(loginUrl)
  }

  logout(){
    localStorage.setItem("kworks_auth","false")
    localStorage.setItem("kworks_role","")
    localStorage.setItem("kworks_workspace","")
    localStorage.setItem("kworks_username","")
    localStorage.setItem("kworks_documents","")
  }
}