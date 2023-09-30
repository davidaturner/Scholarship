import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventExamplesComponent } from './event-examples.component';

describe('EventExamplesComponent', () => {
  let component: EventExamplesComponent;
  let fixture: ComponentFixture<EventExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventExamplesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
