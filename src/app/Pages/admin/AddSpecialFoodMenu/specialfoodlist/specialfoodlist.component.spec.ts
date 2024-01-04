import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialfoodlistComponent } from './specialfoodlist.component';

describe('SpecialfoodlistComponent', () => {
  let component: SpecialfoodlistComponent;
  let fixture: ComponentFixture<SpecialfoodlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialfoodlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialfoodlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
