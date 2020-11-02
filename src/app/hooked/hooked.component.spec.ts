import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HookedComponent } from './hooked.component';

describe('HookedComponent', () => {
  let component: HookedComponent;
  let fixture: ComponentFixture<HookedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HookedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HookedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
