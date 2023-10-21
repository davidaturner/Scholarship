import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeOneTwoComponent } from './three-one-two.component';

describe('ThreeOneTwoComponent', () => {
  let component: ThreeOneTwoComponent;
  let fixture: ComponentFixture<ThreeOneTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeOneTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreeOneTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
