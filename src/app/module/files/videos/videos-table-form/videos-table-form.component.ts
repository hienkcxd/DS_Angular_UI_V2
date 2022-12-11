import {Component, OnDestroy, OnInit} from '@angular/core';
import {FileStorageService} from "../../../../services/Api/file/file-storage.service";
import {FileStorage} from "../../../../model/file/file-storage.model";
import {Subject} from "rxjs";

@Component({
  selector: 'app-videos-table-form',
  templateUrl: './videos-table-form.component.html',
  styleUrls: ['./videos-table-form.component.scss']
})
export class VideosTableFormComponent implements OnInit,OnDestroy {

  constructor(private fileStorageService:FileStorageService) { }
  dtTrigger: Subject<any> = new Subject<any>();
  listFile!: FileStorage[];
  dtOptions: any = {};
  fetchFileList(){
    this.fileStorageService.getAllFile().subscribe(data=>{
      this.listFile = data;
      this.dtTrigger.next(false);
    })
  }
  ngOnInit(): void {
    this.fetchFileList();
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
