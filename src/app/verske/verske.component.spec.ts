import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerskeComponent } from './verske.component';

describe('VerskeComponent', () => {
  let component: VerskeComponent;
  let fixture: ComponentFixture<VerskeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerskeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerskeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
