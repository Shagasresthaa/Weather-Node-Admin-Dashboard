import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeActivityModuleComponent } from './node-activity-module.component';

describe('NodeActivityModuleComponent', () => {
  let component: NodeActivityModuleComponent;
  let fixture: ComponentFixture<NodeActivityModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodeActivityModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NodeActivityModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
