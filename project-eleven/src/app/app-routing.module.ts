import { NgModule } from '@angular/core';
import { ProjectLinksComponent } from './project-links/project-links.component';
import { TasksListsComponent } from './tasks-lists/tasks-lists.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'Project Links',component:ProjectLinksComponent},
  {path:'Tasks Lists',component:TasksListsComponent},
  {path:'About Me',component:AboutMeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
