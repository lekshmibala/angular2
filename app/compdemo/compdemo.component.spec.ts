import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompdemoComponent } from './compdemo.component';

describe('CompdemoComponent', () => {
  let component: CompdemoComponent;
  let fixture: ComponentFixture<CompdemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompdemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
