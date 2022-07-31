import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeMapNetworkModuleComponent } from './node-map-network-module.component';

describe('NodeMapNetworkModuleComponent', () => {
  let component: NodeMapNetworkModuleComponent;
  let fixture: ComponentFixture<NodeMapNetworkModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodeMapNetworkModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NodeMapNetworkModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
