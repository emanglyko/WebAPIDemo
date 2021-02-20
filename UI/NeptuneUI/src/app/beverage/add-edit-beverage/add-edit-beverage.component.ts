import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-beverage',
  templateUrl: './add-edit-beverage.component.html',
  styleUrls: ['./add-edit-beverage.component.css']
})
export class AddEditBeverageComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() public beverage:any;

  BeverageId:string="";
  BeverageName:string="";
  BeverageType:string="";
  BeverageDateAdded:string="";
  BeverageDescription:string="";
  BeverageFileName:string="";

  ngOnInit(): void {
    this.BeverageId = this.beverage.id;
    this.BeverageName = this.beverage.name;
    this.BeverageType = this.beverage.type;
    this.BeverageDateAdded = this.beverage.dateadded;
    this.BeverageDescription = this.beverage.description;
    this.BeverageFileName = this.beverage.imagefilename;
  }

  addBeverage() {
    var val = {
      id:this.BeverageId,
      name:this.BeverageName,
      type:this.BeverageType,
      description:this.BeverageDescription,
      imagefilename:this.BeverageFileName
    };
    this.service.AddBeverage(val).subscribe(res=>(alert(res.toString())));

  }

  updateBeverage() {
    var val = {
      id:this.BeverageId,
      name:this.BeverageName,
      type:this.BeverageType,
      description:this.BeverageDescription,
      imagefilename:this.BeverageFileName
    };
    this.service.UpdateBeverage(val).subscribe(res=>(alert(res.toString())));
  }
}
