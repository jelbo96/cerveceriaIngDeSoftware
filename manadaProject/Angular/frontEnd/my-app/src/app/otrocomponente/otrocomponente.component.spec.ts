import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtrocomponenteComponent } from './otrocomponente.component';

describe('OtrocomponenteComponent', () => {
  let component: OtrocomponenteComponent;
  let fixture: ComponentFixture<OtrocomponenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtrocomponenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtrocomponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
