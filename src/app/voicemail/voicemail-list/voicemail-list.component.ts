import { Component, OnInit } from '@angular/core';
import { of, Observable, BehaviorSubject } from 'rxjs';
import { users } from 'src/app/users';
import { VoicemailService } from '../voicemail.service';
import { IOptions, IVoicemail } from '../_models/voicemail.model';

@Component({
  selector: 'app-voicemail-list',
  templateUrl: './voicemail-list.component.html',
  styleUrls: ['./voicemail-list.component.scss']
})
export class VoicemailListComponent implements OnInit {
  voicemails: BehaviorSubject<IVoicemail[]> = new BehaviorSubject<IVoicemail[]>([]);
  usersOptions = ["All", ...users];
  data: Observable<{ data: IVoicemail[], total: number }> = of({ data: [], total: 0 })
  options: IOptions = {
    start: 0,
    end: 1000,
    total: 0,
    query: "",
    sort: {
      active: "date",
      direction: "asc"
    },
    filter: {
      id: "",
      value: ""
    }
  }
  sortOptions = [
    "date",
    "rating"
  ]
  sortLabels = {
    "date": "Date",
    "rating": "Ratings"
  }
  constructor(private voicemailService: VoicemailService) { }

  ngOnInit(): void {
    this.getVoicemails();
  }

  getVoicemails() {
    this.voicemailService.getVoicemails({...this.options})
      .subscribe((response: any) => {
        this.voicemails.next(response.data);
        this.options.total = response.total;
      });
  }

  onSortChange(event: string) {
    this.options.sort = {
      active: event,
      direction: this.options.sort.active === event ? (this.options.sort.direction === "asc" ? "desc" : "asc") : "asc"
    }
    this.getVoicemails();
  }

  onUserSelected(user: any) {
    this.options.filter.id = "by";
    this.options.filter.value = users.indexOf(user).toString();
    this.getVoicemails();
  }
}