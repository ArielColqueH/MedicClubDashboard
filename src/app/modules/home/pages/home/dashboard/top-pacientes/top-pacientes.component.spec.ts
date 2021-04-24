import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPacientesComponent } from './top-pacientes.component';

describe('TopPacientesComponent', () => {
  let component: TopPacientesComponent;
  let fixture: ComponentFixture<TopPacientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopPacientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopPacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
