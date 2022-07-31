import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeOTAUpdateModuleComponent } from './node-otaupdate-module.component';

describe('NodeOTAUpdateModuleComponent', () => {
  let component: NodeOTAUpdateModuleComponent;
  let fixture: ComponentFixture<NodeOTAUpdateModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodeOTAUpdateModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NodeOTAUpdateModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
