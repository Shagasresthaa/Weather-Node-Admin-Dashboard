import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditsModuleComponent } from './credits-module.component';

describe('CreditsModuleComponent', () => {
  let component: CreditsModuleComponent;
  let fixture: ComponentFixture<CreditsModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditsModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditsModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
