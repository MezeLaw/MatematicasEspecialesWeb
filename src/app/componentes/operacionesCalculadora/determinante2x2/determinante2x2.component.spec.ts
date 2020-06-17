import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Determinante2x2Component } from './determinante2x2.component';

describe('Determinante2x2Component', () => {
  let component: Determinante2x2Component;
  let fixture: ComponentFixture<Determinante2x2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Determinante2x2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Determinante2x2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
