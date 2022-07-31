import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodesDataRawViewModuleComponent } from './nodes-data-raw-view-module.component';

describe('NodesDataRawViewModuleComponent', () => {
  let component: NodesDataRawViewModuleComponent;
  let fixture: ComponentFixture<NodesDataRawViewModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodesDataRawViewModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NodesDataRawViewModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
