import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyClicksComponent } from './my-clicks.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MyClicksComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: MyClicksComponent }
    ]),
  ]
})
export class MyClicksModule { }
