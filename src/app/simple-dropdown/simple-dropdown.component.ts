import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-simple-dropdown',
  templateUrl: './simple-dropdown.component.html',
  styleUrls: ['./simple-dropdown.component.scss']
})
export class SimpleDropdownComponent implements OnInit {
  @Input() options: any[] = [];
  @Input() selected: string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
