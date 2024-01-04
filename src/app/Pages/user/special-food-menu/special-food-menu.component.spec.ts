import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialFoodMenuComponent } from './special-food-menu.component';

describe('SpecialFoodMenuComponent', () => {
  let component: SpecialFoodMenuComponent;
  let fixture: ComponentFixture<SpecialFoodMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialFoodMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialFoodMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
