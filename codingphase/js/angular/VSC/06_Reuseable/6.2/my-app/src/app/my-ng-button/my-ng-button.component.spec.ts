import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNgButtonComponent } from './my-ng-button.component';

describe('MyNgButtonComponent', () => {
  let component: MyNgButtonComponent;
  let fixture: ComponentFixture<MyNgButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyNgButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyNgButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
