import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TaskListComponent } from './pages/task-list/task-list.component';
import { TaskDetailComponent } from './pages/task-detail/task-detail.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:"home",component:DashboardComponent,canActivate: [authGuard]},
  {path:"tasks",component:TaskListComponent,canActivate: [authGuard]},
  {path:"tasks/:id",component:TaskDetailComponent,canActivate: [authGuard]},
  {path:"profile",component:ProfileComponent,canActivate: [authGuard]},
  {path:"**",redirectTo:"/home",pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
