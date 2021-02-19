import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditBeveragetypeComponent } from './add-edit-beveragetype.component';

describe('AddEditBeveragetypeComponent', () => {
  let component: AddEditBeveragetypeComponent;
  let fixture: ComponentFixture<AddEditBeveragetypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditBeveragetypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditBeveragetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
