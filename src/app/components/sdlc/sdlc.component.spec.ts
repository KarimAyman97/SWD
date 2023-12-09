import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdlcComponent } from './sdlc.component';

describe('SdlcComponent', () => {
  let component: SdlcComponent;
  let fixture: ComponentFixture<SdlcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SdlcComponent]
    });
    fixture = TestBed.createComponent(SdlcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
