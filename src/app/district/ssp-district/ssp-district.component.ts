import { Component, Input, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-ssp-district',
  templateUrl: './ssp-district.component.html',
  styleUrls: ['./ssp-district.component.css']
})
export class SspDistrictComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() district:any;
  disID:string;
  pspid:string;

  ssps:any=[];

  ngOnInit(): void {
    this.refreshLists();
  }
  

  loadPossibleSecondary(id:string){
    this.disID = this.district.id;
    this.service.getPossibleSecondary(id).subscribe((data:any) =>{
      this.ssps=data
    });
  }

  loadAvailableSecondary(id:string){
    this.disID = this.district.id;
    this.service.getAssignedSecondary(id).subscribe((data:any) =>{
      this.ssps=data;
    });
  }

  appendSecondary(id:string){
    this.service.appendSecondary(this.disID, id).subscribe(response =>{
      alert(response.toString());
    })
  }

  removeSecondary(id:string){
    this.service.removeSecondary(this.disID, id).subscribe(response =>{
      alert(response.toString());
    })
  }

  refreshLists(){
    if (this.district.append)
      this.loadPossibleSecondary(this.district.id);
    else
      this.loadAvailableSecondary(this.district.id);
    this.pspid = this.district.pspid;
  }


}
