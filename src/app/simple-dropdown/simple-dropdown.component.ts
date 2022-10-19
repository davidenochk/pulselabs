import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ISort } from '../voicemail/_models/voicemail.model';

@Component({
  selector: 'app-simple-dropdown',
  templateUrl: './simple-dropdown.component.html',
  styleUrls: ['./simple-dropdown.component.scss']
})
export class SimpleDropdownComponent implements OnInit {
  @Input() options: any[] = [];
  @Input() selected: any = "";
  @Output() selectionChange: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onSelectionChange(event: any) {
    this.selectionChange.emit(this.selected)
  }

  onClickOption(option: any){
    if(option === this.selected){
      this.selectionChange.emit(option);
    }
  }

}
