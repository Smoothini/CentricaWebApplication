import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-sp',
  templateUrl: './add-edit-sp.component.html',
  styleUrls: ['./add-edit-sp.component.css']
})
export class AddEditSpComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() salesperson:any;
  spid:string;
  spname:string;
  spsurname:string;

  ngOnInit(): void {
    this.spid = this.salesperson.id;
    this.spname = this.salesperson.name;
    this.spsurname = this.salesperson.surname;
  }

  addSp(){
    var val = {
      ID:this.spid,
      Name:this.spname,
      Surname:this.spsurname
    };
    this.service.addSalesMan(val).subscribe(res=>{
      alert(res.toString());
    })
  }
  
  updateSp(){
    var val = {
      ID:this.spid,
      Name:this.spname,
      Surname:this.spsurname
    };
    this.service.updateSalesMan(val.ID,val).subscribe(res=>{ 
      alert(res.toString());
    });
  }
}
