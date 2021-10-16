import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './page-container/content/content.component';
import { ProjectsComponent } from './page-container/projects/projects.component';

const routes: Routes = [
  {path: "skills", component: ContentComponent},
  {path: "works", component: ProjectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
