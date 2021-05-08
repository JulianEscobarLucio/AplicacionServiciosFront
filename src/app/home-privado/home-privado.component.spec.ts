import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePrivadoComponent } from './home-privado.component';

describe('HomePrivadoComponent', () => {
  let component: HomePrivadoComponent;
  let fixture: ComponentFixture<HomePrivadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePrivadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePrivadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
