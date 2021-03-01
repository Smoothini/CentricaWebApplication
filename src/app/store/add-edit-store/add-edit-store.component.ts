import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-store',
  templateUrl: './add-edit-store.component.html',
  styleUrls: ['./add-edit-store.component.css']
})
export class AddEditStoreComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() store:any;
  storeid:string;
  storename:string;
  storeinfo:string;
  storedistrict:string;

  ngOnInit(): void {
    this.storeid = this.store.id;
    this.storename = this.store.name;
    this.storeinfo = this.store.info;
    this.storedistrict = this.store.districtID;
  }

  addStore(){
    var val = {
      ID:this.storeid,
      Name:this.storename,
      Info:this.storeinfo,
      DistrictID:this.storedistrict
    };
    this.service.addStore(val).subscribe(res=>{
      alert(res.toString());
    })
  }
  
  updateStore(){
    var val = {
      ID:this.storeid,
      Name:this.storename,
      Info:this.storeinfo,
      DistrictID:this.storedistrict
    };
    this.service.updateStore(val.ID,val).subscribe(res=>{
      alert(res.toString());
    })
  }

}
