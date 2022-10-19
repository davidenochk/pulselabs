import { SlicePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { Observable, of, delay } from "rxjs";
import { data } from '../data';
import { IVoicemail } from './_models/voicemail.model';

@Injectable({
  providedIn: 'root'
})
export class VoicemailService {
  list: IVoicemail[] = data;

  constructor() { }

  getVoicemails(from: number = 0, to: number = 1000, query: string = "") {
    console.log(this.list.length);
    return of(this.list.slice(from, to).filter((voice: IVoicemail) => {
      return voice.by.toLowerCase().indexOf(query.toLowerCase()) > -1
    }));
  }
}
