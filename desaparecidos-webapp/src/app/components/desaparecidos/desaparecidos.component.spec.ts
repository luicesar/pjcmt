/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DesaparecidosComponent } from './desaparecidos.component';

describe('DesaparecidosComponent', () => {
  let component: DesaparecidosComponent;
  let fixture: ComponentFixture<DesaparecidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesaparecidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesaparecidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
