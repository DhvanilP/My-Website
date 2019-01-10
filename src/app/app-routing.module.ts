import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'about',
    loadChildren: './about/about.module#AboutModule',
    data: {
      state: 'about',
      title: 'About'
    }
  },
  {
    path: 'projects',
    loadChildren: './projects/projects.module#ProjectsModule',
    data: {
      state: 'projects',
      title: 'Projects'
    }
  },
  {
    path: 'my-clicks',
    loadChildren: './my-clicks/my-clicks.module#MyClicksModule',
    data: {
      state: 'my-clicks',
      title: 'MyClicks'
    }
  },
  {
    path: 'resume',
    loadChildren: './resume/resume.module#ResumeModule',
    data: {
      state: 'resume',
      title: 'Resume'
    }
  },
  {
    path: 'contact',
    loadChildren: './contact/contact.module#ContactModule',
    data: {
      state: 'contact',
      title: 'Contact'
    }
  },
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
