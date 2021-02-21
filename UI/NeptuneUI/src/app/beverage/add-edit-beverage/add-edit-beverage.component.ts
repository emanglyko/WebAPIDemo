import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-beverage',
  templateUrl: './add-edit-beverage.component.html',
  styleUrls: ['./add-edit-beverage.component.css']
})
export class AddEditBeverageComponent implements OnInit {

  constructor(private service:SharedService,private route: ActivatedRoute, private router: Router) { }

  @Input() public beverage:any;

  BeverageId:string="";
  BeverageName:string="";
  BeverageType:string="";
  BeverageDateAdded:string="";
  BeverageDescription:string="";
  BeverageFileName:string="";
  BeverageFilePath:string="";
  
  BeverageTypeList:any=[];

  ngOnInit(): void {
    this.BeverageId = this.beverage.id;
    this.BeverageName = this.beverage.name;
    this.BeverageType = this.beverage.type;
    this.BeverageDateAdded = this.beverage.dateadded;
    this.BeverageDescription = this.beverage.description;
    this.BeverageFileName = this.beverage.imagefilename;
    this.BeverageFilePath = this.service.ImageURL + this.BeverageFileName;

    this.loadBeverageTypeList();
  }

  loadBeverageTypeList() {
    this.service.GetBeverageTypes().subscribe(data=> this.BeverageTypeList = data);
  }

  addBeverage() {
    var val = {
      id:this.BeverageId,
      name:this.BeverageName,
      type:this.BeverageType,
      description:this.BeverageDescription,
      imagefilename:this.BeverageFileName
    };
    this.service.AddBeverage(val).subscribe({
      //next: (result: any) => {alert(result);},
      error: (err: any) => {alert('Error, please check all fields');},
      complete: () => {alert('Success');
      }
      });
  }

  updateBeverage() {
    var val = {
      id:this.BeverageId,
      name:this.BeverageName,
      type:this.BeverageType,
      description:this.BeverageDescription,
      imagefilename:this.BeverageFileName
    };
    this.service.UpdateBeverage(val).subscribe({
      //next: (result: any) => {alert(result);},
      error: (err: any) => {alert('Error, please check all fields');},
      complete: () => {alert('Success');
      }
      });
  }

  reload() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['./'], { relativeTo: this.route });
  }
}
