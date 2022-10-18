import { TestBed } from '@angular/core/testing';

import { VoicemailService } from './voicemail.service';

describe('VoicemailService', () => {
  let service: VoicemailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoicemailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
