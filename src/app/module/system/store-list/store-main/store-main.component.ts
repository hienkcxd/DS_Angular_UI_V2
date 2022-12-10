import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Store} from "../../../../model/system/store.model";
import {StoreService} from "../../../../services/Api/device/store.service";
import {Subject} from "rxjs";
import {DataTableDirective} from "angular-datatables";

@Component({
  selector: 'app-store-main',
  templateUrl: './store-main.component.html',
  styleUrls: ['./store-main.component.scss']
})
export class StoreMainComponent implements OnInit, OnDestroy  {
  constructor(private storeService:StoreService) {
  }
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject<any>();
  listStore!: Store[];

  fetchStore():void{
    this.storeService.getUserStore()
      .subscribe((response: any)=>{
      this.listStore = response;
      this.dtTrigger.next(false);
    })
  }

  @ViewChild(DataTableDirective, {static: false})
  datatableElement: any = DataTableDirective;
  min: any = 1;
  max: any = 5;

  ngOnInit(): void {
    this.fetchStore();
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

