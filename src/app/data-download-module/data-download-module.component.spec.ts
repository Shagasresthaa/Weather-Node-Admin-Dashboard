import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDownloadModuleComponent } from './data-download-module.component';

describe('DataDownloadModuleComponent', () => {
  let component: DataDownloadModuleComponent;
  let fixture: ComponentFixture<DataDownloadModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataDownloadModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataDownloadModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
