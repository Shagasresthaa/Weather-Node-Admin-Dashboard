import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassResetModuleComponent } from './pass-reset-module.component';

describe('PassResetModuleComponent', () => {
  let component: PassResetModuleComponent;
  let fixture: ComponentFixture<PassResetModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassResetModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassResetModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
