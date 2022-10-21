import { Component, OnInit } from '@angular/core';
import { of, Observable, BehaviorSubject, delay, debounceTime, map } from 'rxjs';
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
  data: Observable<{ data: IVoicemail[], total: number }> = of({ data: [], total: 0 });
  fetchLength = 10;
  loading = false;
  options: IOptions = {
    start: 0,
    end: 10,
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
  scroll: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  target: any;
  constructor(private voicemailService: VoicemailService) { }

  ngOnInit(): void {
    this.getVoicemails()
      .subscribe((response) => {
        this.voicemails.next(response);
      });
    this.scroll.pipe(debounceTime(100))
      .subscribe(_event => {
        if (_event) {
          this.target = _event.target;
          const percentScrolled = _event.target.scrollTop * 100 / _event.target.scrollHeight;
          if (percentScrolled >= 80 && this.options.end !== this.options.total && !this.loading) {
            this.options.start = this.options.start + this.fetchLength;
            this.options.end = this.options.end + this.fetchLength > this.options.total ? this.options.total : this.options.end + this.fetchLength;
            this.loading = true;
            this.getVoicemails()
              .subscribe((response) => {
                this.loading = false;
                const _voicemails = this.voicemails.getValue() || [];
                this.voicemails.next([..._voicemails, ...response]);
              });
          }
        }
      })
  }

  getVoicemails() {
    return this.voicemailService.getVoicemails({ ...this.options })
      .pipe(map((response: any) => {
        this.options.total = response.total;
        return response.data;
      }));
  }

  onSortChange(event: string) {
    this.options.start = 0;
    this.options.end = this.fetchLength;
    this.options.sort = {
      active: event,
      direction: this.options.sort.active === event ? (this.options.sort.direction === "asc" ? "desc" : "asc") : "asc"
    }
    this.getVoicemails().subscribe(response => {
      this.voicemails.next(response);
      if(this.target) this.target.scrollTo(0, 0);
    });
  }

  onUserSelected(user: any) {
    this.options.start = 0;
    this.options.end = this.fetchLength;
    this.options.filter.id = "by";
    this.options.filter.value = users.indexOf(user).toString();
    this.getVoicemails().subscribe(response => {
      this.voicemails.next(response);
      if(this.target) this.target.scrollTo(0, 0);
    });
  }

  onScroll(event: any) {
    this.scroll.next(event);
  }
}