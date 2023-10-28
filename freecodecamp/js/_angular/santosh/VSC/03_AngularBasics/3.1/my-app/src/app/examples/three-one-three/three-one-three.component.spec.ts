import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeOneThreeComponent } from './three-one-three.component';

describe('ThreeOneThreeComponent', () => {
  let component: ThreeOneThreeComponent;
  let fixture: ComponentFixture<ThreeOneThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeOneThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreeOneThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
