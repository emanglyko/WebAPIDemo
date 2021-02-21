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
      typeid:"",
      type:"",
      dateadded:"",
      description:"",
      imagefilename:"default.png"
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
    if(confirm("Are you sure you want to delete?")) {
      this.beverage = item;
      this.service.DeleteBeverage(item).subscribe({
        //next: (result: any) => {alert(result);},
        error: (err: any) => {alert('Error, please check all fields');},
        complete: () => {alert('Success'); this.refreshBeverages();
        }
        });
    }
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
      console.log("Refreshing beverages");
    });
  }
}
