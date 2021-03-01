import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-store',
  templateUrl: './show-store.component.html',
  styleUrls: ['./show-store.component.css']
})
export class ShowStoreComponent implements OnInit {

  constructor(private service:SharedService) { }

  StoreList:any=[];

  ModalTitle:string;
  ActivateAddEditStoreComponent:boolean;
  store:any;


  ngOnInit(): void {
    this.refreshStoreList();
  }

  addClick(){
    this.store={id:0, name:"", info:"", districtID:1}
    this.ModalTitle = "Add Store";
    this.ActivateAddEditStoreComponent = true;
  }

  editClick(item){
    this.store=item;
    this.ModalTitle="Edit Store";
    this.ActivateAddEditStoreComponent = true;
  }

  closeClick(){
    this.ActivateAddEditStoreComponent = false;
    this.refreshStoreList();
  }



  refreshStoreList(){
    this.service.getStoreList().subscribe(data=>{
      this.StoreList=data;
    })
  }

}
