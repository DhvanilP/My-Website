import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import * as $ from 'jquery';
import * as _ from 'showdown';
declare var popover: any;


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent implements OnInit {
  PROJECTS: string[];
  Readme: String;
  ReadmeHTML: String;
  constructor(private httpService: HttpClient) { }

  ngOnInit() {
    this.httpService.get('./assets/projects.json').subscribe(
      data => {
        this.PROJECTS = data as string [];	 // FILL THE ARRAY WITH DATA.
         console.log(this.PROJECTS[1]);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      },
      () => {
        console.log('fetched successfully projects');
      }
    );
  }

  public readmeFetch(project) {
    // console.log('Hello this is as test');
    // console.log(project);
    this.httpService.get(project.raw_readme, {
      responseType: 'text'
    }).subscribe(
      data => {
        this.Readme = data;
        console.log(data);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      },
      () => {
        const converter  = new _.Converter();
        const text = this.Readme;
        this.ReadmeHTML = converter.makeHtml(text);
        console.log('______________________________________');
        console.log(this.ReadmeHTML);
      }
    );
  }
}
