import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import {ShowBeveragetypeComponent} from './../show-beveragetype/show-beveragetype.component';
import {Router, NavigationExtras} from "@angular/router";

@Component({
  selector: 'app-add-edit-beveragetype',
  templateUrl: './add-edit-beveragetype.component.html',
  styleUrls: ['./add-edit-beveragetype.component.css']
})
export class AddEditBeveragetypeComponent implements OnInit {

  constructor(private service:SharedService, private router:Router) { }

  @Input() public beveragetype:any;

  BeverageTypeId:string="";
  BeverageType:string="";

  ngOnInit(): void {
    this.BeverageTypeId = this.beveragetype.id;
    this.BeverageType = this.beveragetype.type;
  }

  addBeverageType() {
    var val = {
      id:this.BeverageTypeId,
      type:this.BeverageType
    };
    this.service.AddBeverageType(val).subscribe({
      //next: (result: any) => {alert(result);},
      error: (err: any) => {alert('Error, please check all fields');},
      complete: () => {alert('Success');
      }
      });
  }

  updateBeverageType() {
    var val = {
      id:this.BeverageTypeId,
      type:this.BeverageType
    };
    this.service.UpdateBeverage(val).subscribe({
      //next: (result: any) => {alert(result);},
      error: (err: any) => {alert('Error, please check all fields');},
      complete: () => {alert('Success');
      }
      });
  }
}
