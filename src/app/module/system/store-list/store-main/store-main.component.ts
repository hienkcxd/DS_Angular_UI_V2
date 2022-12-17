import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Store} from "../../../../model/system/store.model";
import {StoreService} from "../../../../services/Api/system/store.service";
import {Subject} from "rxjs";
import {DataTableDirective} from "angular-datatables";
import {Router} from "@angular/router";
import {data, error} from "jquery";

@Component({
  selector: 'app-store-main',
  templateUrl: './store-main.component.html',
  styleUrls: ['./store-main.component.scss']
})
export class StoreMainComponent implements OnInit, OnDestroy  {
  constructor(private storeService:StoreService, private route:Router) {
  }
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject<any>();
  listStore!: Store[];

  fetchStore():void{
    this.storeService.getUserStore()
      .subscribe(data=>{
        this.listStore = data;
        this.dtTrigger.next(false);
      })
  }


  ngOnInit(): void {
    this.fetchStore();
    this.dtOptions = {
      pagingType: 'full_numbers',
      dom: 'Blfrtip',
      buttons: [
        'excel'
      ],
      retrieve: true,
      stateSave: true,
      pageLength: 7,
      lengthMenu: [1,2,3,4,5,6,7],
    }
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  delete(id:string) {
    if(confirm("ban co chac muon xoa store ID - "+id)){
      let currentURL = this.route.url;
      this.storeService.deleteStore(id).subscribe(data=>{
        alert("xóa thành công store Id - "+id)
        this.fetchStore();
        this.route.navigate([currentURL])
      },error=>{
        alert("không có quyền xóa!!!")
      });
    }else{
      alert("ban khong muon xoa nua")
    }
  }
}

