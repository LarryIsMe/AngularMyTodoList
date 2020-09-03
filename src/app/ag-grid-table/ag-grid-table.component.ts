import { Component, OnInit } from '@angular/core';
import { TableService } from '../services/table.service';

@Component({
  selector: 'app-ag-grid-table',
  templateUrl: './ag-grid-table.component.html',
  styleUrls: ['./ag-grid-table.component.css']
})
export class AgGridTableComponent implements OnInit {

  columnDefs = [
    { headerName: 'Make', field: 'make', sortable: true },
    { headerName: 'Model', field: 'model', sortable: true },
    { headerName: 'Price', field: 'price', sortable: true }
  ];

  rowData : any;

  constructor(private TableService: TableService) { }

  ngOnInit(): void {
    this.getTableList();
  }

  getTableList() {
    this.TableService.getTableList().subscribe(
      (resp : { body: any; }) => {
        // const result: any = { ...resp.body };
        // console.log(result.list);
        // this.rowData = result.list;
        this.rowData = resp;
      },
      error => alert(error)
    );
  }

}
