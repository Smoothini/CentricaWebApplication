import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-sp',
  templateUrl: './show-sp.component.html',
  styleUrls: ['./show-sp.component.css']
})
export class ShowSpComponent implements OnInit {

  constructor(private service:SharedService) { }

  SpList:any=[];

  ModalTitle:string;
  ActivateAddEditSpComponent:boolean;
  salesperson:any;



  ngOnInit(): void {
    this.refreshSpList();
  }

  addClick(){
    this.salesperson={id:0, name:"", surname:""}
    this.ModalTitle = "Add Salesperson";
    this.ActivateAddEditSpComponent = true;
  }

  editClick(item){
    this.salesperson=item;
    this.ModalTitle="Edit Salesperson";
    this.ActivateAddEditSpComponent = true;
  }

  deleteClick(item){
    if(confirm("Are you sure you want to delete "+item.name+" ?")){
      this.service.deleteSalesMan(item.id).subscribe(res => 
        alert(res.toString()));
        this.refreshSpList();
    }
  }

  closeClick(){
    this.ActivateAddEditSpComponent = false;
    this.refreshSpList();
  }



  refreshSpList(){
    this.service.getSalesManList().subscribe(data=>{
      this.SpList=data;
    })
  }
}
