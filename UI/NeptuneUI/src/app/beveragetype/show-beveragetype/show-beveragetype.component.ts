import { Component, OnInit, Output } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-beveragetype',
  templateUrl: './show-beveragetype.component.html',
  styleUrls: ['./show-beveragetype.component.css']
})
export class ShowBeveragetypeComponent implements OnInit {

  constructor(private service:SharedService) { }
  BeverageTypeList:any=[];

  ModalTitle:string="Beverage Types";
  ActivateAddEditBeverageTypeComponent:boolean=false;
  beveragetype:any;

  ngOnInit(): void {
    this.refreshBeverageTypes();
  }

  onClick() {
    console.log("onClick Modal");
    this.beveragetype={
      id:0,
      type:""
    }
    this.ModalTitle="Add Beverage Type";
    this.ActivateAddEditBeverageTypeComponent=true;
  }

  onClose() {
    console.log("OnClose Reached");
    this.ActivateAddEditBeverageTypeComponent=false;
    this.refreshBeverageTypes();
  }

  editClick(item: any) {
    this.beveragetype = item;
    this.ModalTitle = "Edit Beverage";
    this.ActivateAddEditBeverageTypeComponent=true;
  }

  deleteClick(item: any ) {
    if(confirm("Are you sure you want to delete?")) {
      this.beveragetype = item;
      this.service.DeleteBeverageType(item).subscribe({
        //next: (result: any) => {alert(result);},
        error: (err: any) => {alert('Error, please check all fields. Make sure there are no beverages using this type.');},
        complete: () => {alert('Success'); this.refreshBeverageTypes();
        }
        });
    }
  }

  refreshBeverageTypes() {
    //subscribe so it waits for return data. async operation
    this.service.GetBeverageTypes().subscribe(data=> {
      this.BeverageTypeList = data;
      console.log("Refreshing beverage types");
    });
  }

}
