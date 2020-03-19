import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaEditarComponent } from './tela-editar.component';

describe('TelaEditarComponent', () => {
  let component: TelaEditarComponent;
  let fixture: ComponentFixture<TelaEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
