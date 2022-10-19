import { Component, OnInit, Input } from '@angular/core';
import { users } from 'src/app/users';
import { IVoicemail } from '../_models/voicemail.model';

@Component({
  selector: 'app-voicemail-card',
  templateUrl: './voicemail-card.component.html',
  styleUrls: ['./voicemail-card.component.scss']
})
export class VoicemailCardComponent implements OnInit {

  @Input() voicemail: any;
  usersList = users;
  constructor() { }

  ngOnInit(): void {
  }

}
