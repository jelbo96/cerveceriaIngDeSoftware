import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearBashComponent } from './crear-bash.component';

describe('CrearBashComponent', () => {
  let component: CrearBashComponent;
  let fixture: ComponentFixture<CrearBashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearBashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearBashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
