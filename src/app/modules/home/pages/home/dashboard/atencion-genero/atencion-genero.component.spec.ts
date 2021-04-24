import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtencionGeneroComponent } from './atencion-genero.component';

describe('AtencionGeneroComponent', () => {
  let component: AtencionGeneroComponent;
  let fixture: ComponentFixture<AtencionGeneroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtencionGeneroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtencionGeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
