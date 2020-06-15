import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerOrdenComponent } from './primer-orden.component';

describe('PrimerOrdenComponent', () => {
  let component: PrimerOrdenComponent;
  let fixture: ComponentFixture<PrimerOrdenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerOrdenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerOrdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
