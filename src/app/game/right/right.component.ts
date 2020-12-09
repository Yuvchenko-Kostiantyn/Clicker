import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { StorageManagerService } from 'src/app/services/storage-manager.service';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.scss']
})
export class RightComponent implements OnInit {

  constructor(
    private router: Router,
    private storage: StorageManagerService,
  ) { }

  previousScore;
  @Input() resultMessage;
  radioValue = '5';
  @Input() isGameOn;
  @Input() isGameOver;
  @Input() playerName;
  @Output() reset = new EventEmitter();
  @Output() radioChange = new EventEmitter();


  ngOnInit(): void {
    this.updatePreviousScore();
  }

  updatePreviousScore(): void {
    this.previousScore = this.storage.getUserScore(this.playerName, this.radioValue);
  }

  onChangeName(): void {
    this.router.navigate(['index']);
  }

  onReset(): void {
    this.updatePreviousScore();
    this.reset.next('reset');
  }

  onCountdownChange(): void {
    this.radioChange.emit(this.radioValue);
    this.updatePreviousScore();
  }

  setPreviousScore(): void {
    this.previousScore = this.storage.getUserScore(this.playerName, this.radioValue);
  }
}
