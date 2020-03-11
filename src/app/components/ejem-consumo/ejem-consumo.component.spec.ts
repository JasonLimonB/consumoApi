import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemConsumoComponent } from './ejem-consumo.component';

describe('EjemConsumoComponent', () => {
  let component: EjemConsumoComponent;
  let fixture: ComponentFixture<EjemConsumoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjemConsumoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjemConsumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
