import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiCallService } from 'src/app/Services/api-call.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  popupVisible = true;
  rForm!: FormGroup;

  constructor(
    private location: Location,
    public http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiCallService) { }

  isEditMode = false;
  itemId: number | null = null;
  foodIdForUpdate: number  = 0;
  ngOnInit(): void {
    this.popupVisible;
    this.rForm = new FormGroup({
      foodName: new FormControl(),
      foodPrice: new FormControl(),
      foodDescription: new FormControl(),
      foodCategory: new FormControl(),
      foodType: new FormControl(),
    });

    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.foodIdForUpdate= parseInt(this.route.snapshot.paramMap.get('id') || '0', 10);
      if (id) {
        this.isEditMode = true;
        this.itemId = +id;
        this.apiService.GetAllFoodDetailsById(this.itemId).subscribe((res) => {
          const item = res[0]; // Get the first (and only) item from the array
          const categoryId = this.categories.find(c=>c.name === item.foodCategory)?.id;
          const typeId = this.types.find(t => t.name === item.foodType)?.id;
          if (item) {
            this.rForm.patchValue({
              foodName: item.foodName,
              foodPrice: item.foodPrice,
              foodDescription: item.foodDescription,
              foodCategory: categoryId,
              foodType: typeId           
            });
          }
        }, err => {
          console.log(err);
        });

      }
    });
  }
  categories = [
    { id: 1, name: 'Pizza' },
    { id: 2, name: 'Burger' },
    { id: 3, name: 'Pasta' },
    { id: 4, name: 'Salad' },
    { id: 5, name: 'Dessert' }
  ];
  types = [
    { id: 1, name: 'N' },
    { id: 2, name: 'S' },
  ];
  onPopupHidden() {
    this.location.back();
    this.popupVisible = false;
  }

  addeditButton() {
    const formValue = this.rForm.value;
    const selectedCategory = this.categories.find(c => c.id === formValue.foodCategory);
    const selectedType = this.types.find(t => t.id === formValue.foodType);

    const payload = {
      ...formValue,
      foodCategory: selectedCategory?.name,
      foodType: selectedType?.name
    };
    if (this.foodIdForUpdate > 0 ) {
      // Update existing item
      this.apiService.InsertUpdateFoodMenu(payload,this.foodIdForUpdate).subscribe({
        next: (res) => {
          console.log("Food Menu Updated Successfully", res);
          this.router.navigate(['/admin/sidenav/listFoodMenu']);
        },
        error: (err) => {
          console.error("Error updating food menu", err);
        }
      });
    } else {
      // Add new item
      this.apiService.InsertUpdateFoodMenu(payload,this.foodIdForUpdate).subscribe({
        next: (res) => {
          console.log("Food Menu Added Successfully", res);
          this.router.navigate(['/admin/sidenav/listFoodMenu']);
        },
        error: (err) => {
          console.error("Error adding food menu", err);
        }
      });
    }
  }
}
