import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() tableData
  @Input() tableKey
  sortedData;
  timeValue;


  constructor() { }

  ngOnInit(): void {
    this.sortedData = this.sortData(this.tableData);
    this.timeValue = this.tableKey.split('_')[1];
  }

  sortData(data){
    const output = []
    for(let i in data){
      output.push([i, data[i][this.tableKey]])
    }
    return output.sort((a,b) => b[1]-a[1])
  }

}
