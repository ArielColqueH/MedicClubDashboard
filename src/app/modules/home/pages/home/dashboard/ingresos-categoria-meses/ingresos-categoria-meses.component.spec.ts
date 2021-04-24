import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresosCategoriaMesesComponent } from './ingresos-categoria-meses.component';

describe('IngresosCategoriaMesesComponent', () => {
  let component: IngresosCategoriaMesesComponent;
  let fixture: ComponentFixture<IngresosCategoriaMesesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresosCategoriaMesesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresosCategoriaMesesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
