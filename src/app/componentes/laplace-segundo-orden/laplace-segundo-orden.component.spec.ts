import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaplaceSegundoOrdenComponent } from './laplace-segundo-orden.component';

describe('LaplaceSegundoOrdenComponent', () => {
  let component: LaplaceSegundoOrdenComponent;
  let fixture: ComponentFixture<LaplaceSegundoOrdenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaplaceSegundoOrdenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaplaceSegundoOrdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
