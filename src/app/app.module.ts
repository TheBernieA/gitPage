import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageContainerComponent } from './page-container/page-container.component';
import { NavBarComponent } from './page-container/nav-bar/nav-bar.component';
import { TopSectionComponent } from './page-container/top-section/top-section.component';
import { ContentComponent } from './page-container/content/content.component';
import { ProjectsComponent } from './page-container/projects/projects.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PageContainerComponent,
    NavBarComponent,
    TopSectionComponent,
    ContentComponent,
    ProjectsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
