import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundoOrdenComponent } from './segundo-orden.component';

describe('SegundoOrdenComponent', () => {
  let component: SegundoOrdenComponent;
  let fixture: ComponentFixture<SegundoOrdenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegundoOrdenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegundoOrdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
