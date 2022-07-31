import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManagementModuleComponent } from './user-management-module.component';

describe('UserManagementModuleComponent', () => {
  let component: UserManagementModuleComponent;
  let fixture: ComponentFixture<UserManagementModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserManagementModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserManagementModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
