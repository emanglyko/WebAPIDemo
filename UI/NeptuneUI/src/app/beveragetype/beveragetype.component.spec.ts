import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeveragetypeComponent } from './beveragetype.component';

describe('BeveragetypeComponent', () => {
  let component: BeveragetypeComponent;
  let fixture: ComponentFixture<BeveragetypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeveragetypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeveragetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
