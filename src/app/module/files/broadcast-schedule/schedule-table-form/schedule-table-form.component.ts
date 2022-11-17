import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule-table-form',
  templateUrl: './schedule-table-form.component.html',
  styleUrls: ['./schedule-table-form.component.scss']
})
export class ScheduleTableFormComponent implements OnInit {

  constructor() { }
  dtOptions: any = {};
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 7,
      lengthMenu: [1,2,3,4,5,6,7],
      // Declare the use of the extension in the dom parameter
      dom: 'Blfrtip',
      // Configure the buttons
      buttons: [
        'excel',
      ],
      columns: [
        {
          title: 'id',
          data: 'id'
        },
        {
          title: 'name',
          data: 'name'
        },
        {
          title: 'email',
          data: 'email'
        },
        {
          title: 'phone',
          data: 'phone'
        },
        {
          title: 'action',
          data: 'action'
        }
      ],
    }
  }

}
