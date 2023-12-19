import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIUrls } from 'src/app/environments/data';

@Injectable({
  providedIn: 'root'
})
export class WorkspaceService {

  constructor(private http:HttpClient) { }

  loadWorkspace():Observable<any>{
    const workspace=localStorage.getItem("kworks_workspace")
    const loadWorkspaceUrl=`${APIUrls.workspace}workspace=${workspace}&entityType=documents`
    return this.http.get(loadWorkspaceUrl)
  }
}
