import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninModuleComponent } from './signin-module.component';

describe('SigninModuleComponent', () => {
  let component: SigninModuleComponent;
  let fixture: ComponentFixture<SigninModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigninModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigninModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
