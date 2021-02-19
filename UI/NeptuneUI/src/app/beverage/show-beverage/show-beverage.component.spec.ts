import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBeverageComponent } from './show-beverage.component';

describe('ShowBeverageComponent', () => {
  let component: ShowBeverageComponent;
  let fixture: ComponentFixture<ShowBeverageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowBeverageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBeverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
