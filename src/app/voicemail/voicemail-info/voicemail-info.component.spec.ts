import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoicemailInfoComponent } from './voicemail-info.component';

describe('VoicemailInfoComponent', () => {
  let component: VoicemailInfoComponent;
  let fixture: ComponentFixture<VoicemailInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoicemailInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoicemailInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
