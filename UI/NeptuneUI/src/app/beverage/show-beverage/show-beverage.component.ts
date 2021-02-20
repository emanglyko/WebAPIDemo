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

  ngOnInit(): void {
    this.RefreshBeverages();
  }


  RefreshBeverages() {
    //subscribe so it waits for return data. async operation
    this.service.GetBeverages().subscribe(data=> {
      this.BeveragesList = data;
      console.log("Refreshing beverages: " + data.keys.length);
    });
  }

}
