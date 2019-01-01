import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyClicksComponent } from './my-clicks.component';

describe('MyClicksComponent', () => {
  let component: MyClicksComponent;
  let fixture: ComponentFixture<MyClicksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyClicksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyClicksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
