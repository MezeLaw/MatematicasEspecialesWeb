import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Determinante3x3Component } from './determinante3x3.component';

describe('Determinante3x3Component', () => {
  let component: Determinante3x3Component;
  let fixture: ComponentFixture<Determinante3x3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Determinante3x3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Determinante3x3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
