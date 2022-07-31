import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeManagementModuleComponent } from './node-management-module.component';

describe('NodeManagementModuleComponent', () => {
  let component: NodeManagementModuleComponent;
  let fixture: ComponentFixture<NodeManagementModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodeManagementModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NodeManagementModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
