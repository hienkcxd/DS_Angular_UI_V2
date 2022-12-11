import {Component, OnDestroy, OnInit} from '@angular/core';
import {DeviceService} from "../../../../services/Api/device/device.service";
import {Subject} from "rxjs";
import {Device} from "../../../../model/device/device.model";

@Component({
  selector: 'app-status-table',
  templateUrl: './status-table.component.html',
  styleUrls: ['./status-table.component.scss']
})
export class StatusTableComponent implements OnInit,OnDestroy {

  constructor(private deviceService:DeviceService) { }
  dtTrigger: Subject<any> = new Subject<any>();
  deviceList !:Device[];
  dtOptions: any = {};

  fetchDevice(){
    this.deviceService.getAllDevice().subscribe(data=>{
      this.deviceList=data;
      this.dtTrigger.next(false)
    })
  }

  ngOnInit(): void {
    this.fetchDevice();
    this.dtOptions = {
      pagingType: 'full_numbers',
      dom: 'Blfrtip',
      buttons: [
        'excels'
      ],
      pageLength: 7,
      lengthMenu: [1,2,3,4,5,6,7],
    }
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
