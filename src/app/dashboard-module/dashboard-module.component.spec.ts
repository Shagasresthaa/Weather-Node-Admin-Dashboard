import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardModuleComponent } from './dashboard-module.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

describe('DashboardModuleComponent', () => {
  let component: DashboardModuleComponent;
  let fixture: ComponentFixture<DashboardModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule
      ],
      declarations: [ DashboardModuleComponent ,DashboardModuleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
