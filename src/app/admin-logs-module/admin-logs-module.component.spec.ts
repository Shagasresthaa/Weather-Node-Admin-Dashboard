import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLogsModuleComponent } from './admin-logs-module.component';

describe('AdminLogsModuleComponent', () => {
  let component: AdminLogsModuleComponent;
  let fixture: ComponentFixture<AdminLogsModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLogsModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminLogsModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
