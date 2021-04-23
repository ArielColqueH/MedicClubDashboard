import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresosCategoriaComponent } from './ingresos-categoria.component';

describe('IngresosCategoriaComponent', () => {
  let component: IngresosCategoriaComponent;
  let fixture: ComponentFixture<IngresosCategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresosCategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresosCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
