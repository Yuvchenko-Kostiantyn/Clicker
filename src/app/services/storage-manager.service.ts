import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageManagerService {
  userTemplate = {
    timer_5: 0,
    timer_10: 0,
    timer_15: 0
  }

  constructor() { }

  getStorageData(key: string): string {
    return localStorage.getItem(key);
  }

  setStorageData(key, value): void {
    localStorage.setItem(key, value);
  }

  setRecordForUser(name, key, value): void {
    console.log(name, key, value)
    const records = JSON.parse(this.getStorageData('records'));
    if(!records[name]){
      records[name] = this.userTemplate;
    }
    if(value > records[name]['timer_' + key]){
      records[name]['timer_' + key] = value;
    }

    this.setStorageData('records', JSON.stringify(records));
  }

  getUserScore(key, number): string {
    const records = JSON.parse(this.getStorageData('records'));
    return records[key] ? records[key]['timer_'+ number] : undefined;
  }

  getAllRecords(){
    return JSON.parse(this.getStorageData('records'))
  }
}
