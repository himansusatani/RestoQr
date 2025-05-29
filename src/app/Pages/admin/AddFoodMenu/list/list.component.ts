import { Location } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCallService } from 'src/app/Services/api-call.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  popupVisible = true;
  closeButton: boolean = false
  gridHeight: number = 400; // Default grid height
  data: any[] = [];
  constructor(private location: Location, private apiService: ApiCallService, private route: Router) { }
  ngOnInit(): void {
    this.popupVisible = true;
    this.getFoodMenu();
  }

  getFoodMenu() {
    this.apiService.GetAllFoodDetails().subscribe({
      next: (res) => {
        this.data = res;
        console.log(this.data);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log("Completed");
      }
    })
  }

  onPopupHidden() {
    this.location.back();
    this.popupVisible = false;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.adjustLayout();
  }

  adjustLayout() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    this.gridHeight = windowHeight - 200;
  }

  editMenu(id: any) {
    console.log("Edit Menu", id);
    this.route.navigate(['/admin/sidenav/edit', id]);
  }
  deleteMenu(id: any) {
    this.apiService.DeleteFoodMenu(id).subscribe({
      next: (res) => {
        console.log("Menu deleted successfully", res);
        this.getFoodMenu();
      },error: (err) => {
        console.error("Error deleting menu", err);
    }
    });
  }
}
