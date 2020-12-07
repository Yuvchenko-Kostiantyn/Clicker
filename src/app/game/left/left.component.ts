import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.scss']
})
export class LeftComponent implements OnInit {
  buttonValues = {
    count: 'count',
    start: 'start'
  };
  @Input() name;
  @Input() isGameOn;
  @Input() isGameOver;
  @Input() countdown;
  @Input() clickCount;
  @Output() buttonClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick(): void {
    this.buttonClick.next();
  }
}
