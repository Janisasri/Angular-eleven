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

@NgModule({
  declarations: [
    AppComponent,
    LifeCycleComponent,
    LifeCycleChildComponent,
    CounterAppComponent,
    CounterDisplayComponent,
    HitButtonComponent,
    FormComponent,
    EmployeeFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
