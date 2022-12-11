import { Component, OnInit } from '@angular/core';
import {Subject} from "rxjs";
import {Area} from "../../../../model/system/area.model";
import {AreaService} from "../../../../services/Api/system/area.service";

@Component({
  selector: 'app-device-main',
  templateUrl: './device-main.component.html',
  styleUrls: ['./device-main.component.scss']
})
export class DeviceMainComponent implements OnInit {

  constructor(private areaService:AreaService) {
  }
  dtTrigger: Subject<any> = new Subject<any>();
  dtOptions: any = {};
  listArea!: Area[];
  fetchArea(){
    this.areaService.getArea().subscribe(data=>{
      this.listArea = data;
      this.dtTrigger.next(false);
    });
  }
  ngOnInit(): void {
    this.fetchArea();
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
