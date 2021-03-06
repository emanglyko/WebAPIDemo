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
  BeverageTypeId:string="";
  BeverageType:string="";
  BeverageDateAdded:string="";
  BeverageDescription:string="";
  BeverageFileName:string="";
  BeverageFilePath:string="";
  BeverageTypeCombined:string="";
  
  BeverageTypeList:any=[];

  ngOnInit(): void {
    this.BeverageId = this.beverage.id;
    this.BeverageName = this.beverage.name;
    this.BeverageTypeId = this.beverage.typeId;
    this.BeverageType = this.beverage.type;
    this.BeverageDateAdded = this.beverage.dateadded;
    this.BeverageDescription = this.beverage.description;
    this.BeverageFileName = this.beverage.imagefilename;
    this.BeverageFilePath = this.service.ImageURL + this.BeverageFileName;
    this.BeverageTypeCombined = this.BeverageTypeId + ":" + this.BeverageType;
    this.loadBeverageTypeList();
  }

  loadBeverageTypeList() {
    this.service.GetBeverageTypes().subscribe(data=> this.BeverageTypeList = data);
  }

  addBeverage() {
    var val = {
      id:this.BeverageId,
      name:this.BeverageName,
      type:this.BeverageTypeCombined.split(":",1)[0],
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
      type:this.BeverageTypeCombined.split(":",1)[0],
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

  uploadImage(event:any) {
    var file = event.target.files[0];
    const formData:FormData=new FormData();

    formData.append('file', file);
    this.service.UploadImage(formData).subscribe((data:any) => {
      console.log(data);
      this.BeverageFileName = data.message;
      this.BeverageFilePath = this.service.ImageURL + this.BeverageFileName;
    });
  }

  getBeverageTypeId(beveragetype: any, event: Event) {
    console.log('Selected beveragetype: ', beveragetype, event);
  }

  reload() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['./'], { relativeTo: this.route });
  }
}
