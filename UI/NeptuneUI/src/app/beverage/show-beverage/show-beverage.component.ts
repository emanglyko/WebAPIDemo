import { Component, OnInit } from '@angular/core';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-beverage',
  templateUrl: './show-beverage.component.html',
  styleUrls: ['./show-beverage.component.css']
})
export class ShowBeverageComponent implements OnInit {

  constructor(private service:SharedService) { }

  BeveragesList:any=[];

  ModalTitle:string="Beverage";
  ActivateAddEditBeverageComponent:boolean=false;
  beverage:any;


  ngOnInit(): void {
    this.refreshBeverages();
  }

  onClick() {
    console.log("onClick Modal");
    this.beverage={
      id:0,
      name:"",
      type:"",
      dateadded:"",
      description:"",
      imagefilename:""
    }
    this.ModalTitle="Add beverage";
    this.ActivateAddEditBeverageComponent=true;
  }

  editClick(item: any) {
    this.beverage = item;
    this.ModalTitle = "Edit Beverage";
    this.ActivateAddEditBeverageComponent=true;
  }

  deleteClick(item: any ) {

  }

  onClose() {
    console.log("OnClose Reached");
    this.ActivateAddEditBeverageComponent=false;
    this.refreshBeverages();
  }

  refreshBeverages() {
    //subscribe so it waits for return data. async operation
    this.service.GetBeverages().subscribe(data=> {
      this.BeveragesList = data;
      console.log("Refreshing beverages: " + data.keys.length);
    });
  }
}
