import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterEventsComponent } from './character-events.component';

describe('CharacterEventsComponent', () => {
  let component: CharacterEventsComponent;
  let fixture: ComponentFixture<CharacterEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
