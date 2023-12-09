/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InitiationFormComponent } from './initiation-form.component';

describe('InitiationFormComponent', () => {
  let component: InitiationFormComponent;
  let fixture: ComponentFixture<InitiationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitiationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitiationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
