import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaplacePrimerOrdenComponent } from './laplace-primer-orden.component';

describe('LaplacePrimerOrdenComponent', () => {
  let component: LaplacePrimerOrdenComponent;
  let fixture: ComponentFixture<LaplacePrimerOrdenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaplacePrimerOrdenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaplacePrimerOrdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
