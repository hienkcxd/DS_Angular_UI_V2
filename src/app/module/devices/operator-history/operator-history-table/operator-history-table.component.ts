import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operator-history-table',
  templateUrl: './operator-history-table.component.html',
  styleUrls: ['./operator-history-table.component.scss']
})
export class OperatorHistoryTableComponent implements OnInit {

  constructor() { }
  dtOptions: any = {};
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 7,
      lengthMenu: [7, 10, 15],
      // Declare the use of the extension in the dom parameter
      dom: 'Blfrtip',
      // Configure the buttons
      buttons: [
        'excel',
      ],
      columns: [
        {
          title: 'ID',
          data: 'col1'
        },
        {
          title: 'Tên thiết Bị',
          data: 'col2'
        },
        {
          title: 'Id thiết bị',
          data: 'col3'
        },
        {
          title: 'Trạng thái hoạt đông',
          data: 'col4'
        },
        {
          title: 'Chức năng',
          data: 'col5'
        }
      ],
    }
  }

}
