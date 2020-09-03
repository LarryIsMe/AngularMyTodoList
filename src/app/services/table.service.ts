import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private http: HttpClient) { }

  public getTableList() {
    return this.http.get('https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/sample-data/smallRowData.json')
  }
}
