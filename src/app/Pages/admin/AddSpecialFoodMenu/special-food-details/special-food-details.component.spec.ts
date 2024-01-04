import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialFoodDetailsComponent } from './special-food-details.component';

describe('SpecialFoodDetailsComponent', () => {
  let component: SpecialFoodDetailsComponent;
  let fixture: ComponentFixture<SpecialFoodDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialFoodDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialFoodDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
