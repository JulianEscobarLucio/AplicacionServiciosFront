import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegadorPublicoComponent } from './navegador-publico.component';

describe('NavegadorPublicoComponent', () => {
  let component: NavegadorPublicoComponent;
  let fixture: ComponentFixture<NavegadorPublicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavegadorPublicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavegadorPublicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
