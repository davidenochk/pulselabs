import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoicemailCardComponent } from './voicemail-card.component';

describe('VoicemailCardComponent', () => {
  let component: VoicemailCardComponent;
  let fixture: ComponentFixture<VoicemailCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoicemailCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoicemailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
