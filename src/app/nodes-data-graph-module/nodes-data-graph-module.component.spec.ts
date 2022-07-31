import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodesDataGraphModuleComponent } from './nodes-data-graph-module.component';

describe('NodesDataGraphModuleComponent', () => {
  let component: NodesDataGraphModuleComponent;
  let fixture: ComponentFixture<NodesDataGraphModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodesDataGraphModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NodesDataGraphModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
