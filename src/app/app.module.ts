import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TaskListComponent } from './pages/task-list/task-list.component';
import { TaskDetailComponent } from './pages/task-detail/task-detail.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { KanbanComponent } from './shared/kanban/kanban.component';
import { DataTableComponent } from './shared/data-table/data-table.component';
import { FilterDataComponent } from './shared/filter-data/filter-data.component';
import { BreadcrumComponent } from './shared/breadcrum/breadcrum.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InferenceComponent } from './pages/task-detail/inference/inference.component';
import { DocumentsComponent } from './pages/task-detail/documents/documents.component';
import { RelatedTasksComponent } from './pages/task-detail/related-tasks/related-tasks.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { DocumentCardComponent } from './pages/task-detail/documents/document-card/document-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    TaskListComponent,
    TaskDetailComponent,
    NavbarComponent,
    KanbanComponent,
    DataTableComponent,
    FilterDataComponent,
    BreadcrumComponent,
    ProfileComponent,
    InferenceComponent,
    DocumentsComponent,
    RelatedTasksComponent,
    LoaderComponent,
    DocumentCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
