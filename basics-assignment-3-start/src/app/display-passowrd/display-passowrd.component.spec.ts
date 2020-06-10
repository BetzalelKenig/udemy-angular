import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPassowrdComponent } from './display-passowrd.component';

describe('DisplayPassowrdComponent', () => {
  let component: DisplayPassowrdComponent;
  let fixture: ComponentFixture<DisplayPassowrdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayPassowrdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayPassowrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
