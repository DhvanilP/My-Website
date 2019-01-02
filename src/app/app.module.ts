import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationSidebarComponent } from './navigation-sidebar/navigation-sidebar.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MyClicksComponent } from './my-clicks/my-clicks.component';
import { ProjectsComponent } from './projects/projects.component';
import { HttpClientModule } from '@angular/common/http';
import { ResumeComponent } from './resume/resume.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationSidebarComponent,
    AboutComponent,
    ContactComponent,
    MyClicksComponent,
    ProjectsComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    AngularFontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
