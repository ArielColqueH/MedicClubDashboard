import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasImportantesComponent } from './categorias-importantes.component';

describe('CategoriasImportantesComponent', () => {
  let component: CategoriasImportantesComponent;
  let fixture: ComponentFixture<CategoriasImportantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriasImportantesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriasImportantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
