import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewModuleComponent } from './admin-view-module.component';

describe('AdminViewModuleComponent', () => {
  let component: AdminViewModuleComponent;
  let fixture: ComponentFixture<AdminViewModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
