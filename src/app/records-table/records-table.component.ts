import { Component, OnInit } from '@angular/core';
import { StorageManagerService } from '../services/storage-manager.service';

@Component({
  selector: 'app-records-table',
  templateUrl: './records-table.component.html',
  styleUrls: ['./records-table.component.scss']
})
export class RecordsTableComponent implements OnInit {

  constructor(private storage: StorageManagerService) { }
  tableData;
  keys = ['timer_5', 'timer_10', 'timer_15'];

  ngOnInit(): void {
    this.tableData = this.storage.getAllRecords();
  }

}
