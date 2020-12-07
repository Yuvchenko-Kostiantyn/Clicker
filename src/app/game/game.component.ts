import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResultMessageService } from '../services/result-message.service';
import { StorageManagerService } from '../services/storage-manager.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  playerName =  '';
  clickCount = 0;

  countdown;
  isGameOn = false;
  isGameOver = false;
  previousScore;
  radioValue;
  resultMessage;

  constructor(
    private storage: StorageManagerService,
    private messages: ResultMessageService
  ) { }

  ngOnInit(): void {
    this.playerName = this.storage.getStorageData('playerName');
    if(!this.storage.getStorageData('records')){
      this.storage.setStorageData('records', JSON.stringify({}))
    }
    this.setCountdownTimer(5);
  }

  setCountdownTimer(value): void {
    this.radioValue = value;
    this.countdown = parseInt(value, 10);
    this.setPreviousScore();
  }

  onStartClick(): void {
    if (this.isGameOn) {
      this.playOnClick();
    } else if (!this.isGameOn) {
      this.startGame();
    }
  }

  playOnClick(): void {
    this.clickCount++;
  }

  startGame(): void {
    this.isGameOn = true;
    this.startCountdown();
  }

  startCountdown(): void {
    const timer = setInterval(() => {
      this.countdown--;
      if (this.countdown <= 0) {
        clearInterval(timer);
        this.isGameOver = true;
        this.resultMessage = this.messages.getResultMessage(this.storage.getUserScore(this.playerName, this.radioValue), this.clickCount);
        this.storage.setRecordForUser(this.playerName, this.radioValue, this.clickCount);
      }
    }, 1000);
  }

  resetGame(): void {
    this.setCountdownTimer(this.radioValue);
    this.clickCount = 0;
    this.isGameOn = false;
    this.isGameOver = false;
    this.setPreviousScore();
  }

  setPreviousScore(): void {
    this.previousScore = this.storage.getUserScore(this.playerName, this.radioValue);
  }
}
