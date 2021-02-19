import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditBeverageComponent } from './add-edit-beverage.component';

describe('AddEditBeverageComponent', () => {
  let component: AddEditBeverageComponent;
  let fixture: ComponentFixture<AddEditBeverageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditBeverageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditBeverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
