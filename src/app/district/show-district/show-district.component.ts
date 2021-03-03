import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-district',
  templateUrl: './show-district.component.html',
  styleUrls: ['./show-district.component.css']
})
export class ShowDistrictComponent implements OnInit {

  constructor(private service:SharedService) { }

  DistrictList:any=[];

  ModalTitle:string;
  ActivateSSPComp:boolean;
  ActivateAddEditComp:boolean;
  district:any;

  ngOnInit(): void {
    this.refreshDistrictList();
  }





  appendSSPClick(item){
    this.district = item;
    this.ModalTitle = "Append Secondary Salesperson/s";
    this.ActivateSSPComp = true;
    this.ActivateAddEditComp = false;

  }

  removeSSPClick(item){
    this.district = item;
    this.ModalTitle = "Remove Secondary Salesperson/s";
    this.ActivateSSPComp = true;
    this.ActivateAddEditComp = false;
  }



  
  addClick(){
    this.district = {id:0, name:""};
    this.ModalTitle = "Create a new District";
    this.ActivateSSPComp = false;
    this.ActivateAddEditComp = true;

  }

  editClick(item){
    this.district = item;
    this.ModalTitle = "Edit District";
    this.ActivateSSPComp = false;
    this.ActivateAddEditComp = true;
  }


  deleteClick(item){
    if(confirm("Are you sure you want to delete "+item.name+" ?")){
      this.service.deleteDistrict(item.id).subscribe(res => 
        alert(res.toString()));
    }
    this.refreshDistrictList();
  }


  closeClick(){
    this.ActivateSSPComp = false;
    this.ActivateAddEditComp = false;
    this.refreshDistrictList();
  }

  refreshDistrictList(){
    this.service.getDistrictList().subscribe(data=>{
      this.DistrictList=data;
    })
  }
}
