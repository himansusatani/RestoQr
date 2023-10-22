import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFoodSelectionComponent } from './user-food-selection.component';

describe('UserFoodSelectionComponent', () => {
  let component: UserFoodSelectionComponent;
  let fixture: ComponentFixture<UserFoodSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFoodSelectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserFoodSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
