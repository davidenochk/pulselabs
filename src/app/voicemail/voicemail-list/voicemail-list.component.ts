import { Component, OnInit } from '@angular/core';
import { of, Observable } from 'rxjs';
import { VoicemailService } from '../voicemail.service';
import { IVoicemail } from '../_models/voicemail.model';

@Component({
  selector: 'app-voicemail-list',
  templateUrl: './voicemail-list.component.html',
  styleUrls: ['./voicemail-list.component.scss']
})
export class VoicemailListComponent implements OnInit {
  voicemails: Observable<IVoicemail[]> = of([]);
  sortByOptions = [];
  usersOptions = [];
  constructor(private voicemailService: VoicemailService) { }

  ngOnInit(): void {
    this.getVoicemails();
  }

  getVoicemails() {
    this.voicemails = this.voicemailService.getVoicemails(0, 1000);
  }

}
