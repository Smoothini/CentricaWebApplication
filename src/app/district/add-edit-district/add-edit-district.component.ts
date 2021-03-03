import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-district',
  templateUrl: './add-edit-district.component.html',
  styleUrls: ['./add-edit-district.component.css']
})
export class AddEditDistrictComponent implements OnInit {

  constructor(private service:SharedService) { }


  @Input() district:any;
  districtid:string;
  districtname:string;
  districtpsp:number;

  ngOnInit(): void {
    this.districtid = this.district.id;
    this.districtname = this.district.name;
    this.districtpsp = this.district.pspid;
  }

  addDistrict(){
    var val = {
      ID:this.districtid,
      Name:this.districtname,
      PSPID:this.districtpsp
    };
    this.service.addDistrict(val).subscribe(res=>{
      alert(res.toString());
    })
  }
  
  updateDistrict(){
    var val = {
      ID:this.districtid,
      Name:this.districtname,
      PSPID:this.districtpsp
    };
    this.service.updateDistrict(val.ID,val).subscribe(res=>{
      alert(res.toString());
    })
  }

}
