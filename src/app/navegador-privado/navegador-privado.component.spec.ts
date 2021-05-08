import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegadorPrivadoComponent } from './navegador-privado.component';

describe('NavegadorPrivadoComponent', () => {
  let component: NavegadorPrivadoComponent;
  let fixture: ComponentFixture<NavegadorPrivadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavegadorPrivadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavegadorPrivadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
