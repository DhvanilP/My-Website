import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MyClicksComponent } from './my-clicks/my-clicks.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {
    path: 'About',
    component: AboutComponent
  },
  {
    path: 'Projects',
    component: ProjectsComponent
  },
  {
    path: 'MyClicks',
    component: MyClicksComponent
  },
  {
    path: 'Contact',
    component: ContactComponent // change this
  },
  {
    path: '',
    redirectTo: '/About',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/About',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
