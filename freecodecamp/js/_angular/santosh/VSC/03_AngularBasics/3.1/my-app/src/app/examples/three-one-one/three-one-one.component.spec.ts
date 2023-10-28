import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeOneOneComponent } from './three-one-one.component';

describe('ThreeOneOneComponent', () => {
  let component: ThreeOneOneComponent;
  let fixture: ComponentFixture<ThreeOneOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeOneOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreeOneOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
