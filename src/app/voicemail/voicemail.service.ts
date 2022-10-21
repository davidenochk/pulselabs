import { Injectable } from '@angular/core';
import { of, Observable } from "rxjs";
import { data } from '../data';
import { users } from '../users';
import { IFilter, IOptions, ISort, IVoicemail } from './_models/voicemail.model';

@Injectable({
  providedIn: 'root'
})
export class VoicemailService {
  list: IVoicemail[] = data;

  constructor() { }

  getVoicemails(options: IOptions): Observable<{ data: IVoicemail[], total: number }> {
    let result = this.list;
    if (options?.filter?.id && options?.filter?.value !== "-1") {
      result = [...result
        .filter((obj: IVoicemail) => {
          return (obj as any)[options.filter.id]?.toString() === options.filter.value
        })]
    }
    if (options.sort.active) {
      result = [...result.sort((a, b) => {
        if (options.sort.active === "date")
          return new Date(a.date).getTime() > new Date(b.date).getTime() ? (options.sort.direction === "asc" ? 1 : -1) : (options.sort.direction === "asc" ? -1 : 1)
        else if (options.sort.active === "rating") {
          return (a.rating?.easeOfUse + a.rating?.preference + a.rating?.satisfaction + a.rating?.usefulness) > (b.rating?.easeOfUse + b.rating?.preference + b.rating?.satisfaction + b.rating?.usefulness) ? (options.sort.direction === "asc" ? 1 : -1) : (options.sort.direction === "asc" ? -1 : 1)
        } else {
          return 1;
        }
      })]
    }
    const length = result.length;
    result = result.slice(options.start, options.end)
      .filter((voice: IVoicemail) => {
        return users[voice?.by || 0].toLowerCase().indexOf(options.query.toLowerCase()) > -1
      });
    return of({ data: [...result], total: length });
  }
}
