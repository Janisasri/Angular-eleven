import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { LifeCycleChildComponent } from './life-cycle-child/life-cycle-child.component';
import { CounterAppComponent } from './counter-app/counter-app.component';
import { CounterDisplayComponent } from './counter-display/counter-display.component';
import { HitButtonComponent } from './hit-button/hit-button.component';
import { FormComponent } from './form/form.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import{MatToolbarModule} from '@angular/material/toolbar';
import { ProjectLinksComponent } from './project-links/project-links.component';
import { TasksListsComponent } from './tasks-lists/tasks-lists.component';
import { AboutMeComponent } from './about-me/about-me.component';





@NgModule({
  declarations: [
    AppComponent,
    LifeCycleComponent,
    LifeCycleChildComponent,
    CounterAppComponent,
    CounterDisplayComponent,
    HitButtonComponent,
    FormComponent,
    EmployeeFormComponent,
    HomePageComponent,
    ProjectLinksComponent,
    TasksListsComponent,
    AboutMeComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
