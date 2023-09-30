import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageBoxCharacterPanelComponent } from './image-box-character-panel.component';

describe('ImageBoxCharacterPanelComponent', () => {
  let component: ImageBoxCharacterPanelComponent;
  let fixture: ComponentFixture<ImageBoxCharacterPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageBoxCharacterPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageBoxCharacterPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
