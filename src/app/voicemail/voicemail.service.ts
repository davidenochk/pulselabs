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

  getVoicemails(from: number, to: number, query: string = "") {
    return of(this.list).pipe(delay(2000));
  }
}
