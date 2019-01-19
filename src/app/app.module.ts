import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http';
import { NavigationSidebarComponent } from './navigation-sidebar/navigation-sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImageViewerDirective } from './directives/image-viewer.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavigationSidebarComponent,
    ImageViewerDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
