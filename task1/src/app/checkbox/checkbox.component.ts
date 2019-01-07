import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('filter') categories;
  @Input() title: string;

  constructor() {}

  ngOnInit() {}
}
