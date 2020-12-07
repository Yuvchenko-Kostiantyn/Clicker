import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultMessageService {
  newRecord = 'Congratulations, you have set a new record';
  almostEnough = 'Almost beat it! better luck next time';
  notEvenClose = 'Are you even trying bro?';
  literallyZero = 'You do know you are supposed to press the button, right?';
  notBad = 'Not too bad, but try harder next time';

  constructor() { }

  getResultMessage(record, current): string {
    console.log(current, record)
    if (current === 0) {
      return this.literallyZero;
    }

    if (current > record) {
      return this.newRecord;
    }

    if (record - current <= record / 10) {
      return this.almostEnough;
    }

    if (current <= record / 2) {
      return this.notEvenClose;
    }

    if (current >= record / 2) {
      return this.notBad;
    }
  }
}
