import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBeveragetypeComponent } from './show-beveragetype.component';

describe('ShowBeveragetypeComponent', () => {
  let component: ShowBeveragetypeComponent;
  let fixture: ComponentFixture<ShowBeveragetypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowBeveragetypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBeveragetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
