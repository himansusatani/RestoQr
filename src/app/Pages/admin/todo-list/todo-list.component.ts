import { Component } from '@angular/core';
import { ApiCallService } from 'src/app/Services/api-call.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})

export class TodoListComponent {
  data: any[] = [];
  gridHeight: number = 400; // Default grid height
  columnWidths: any = {}; // To hold the dynamic column widths
  popupVisible: boolean = false; // Flag for popup visibility
  popupWidth: string = '80%'; // Default popup width
  popupHeight: string = '80%'; // Default popup height
  formatedcurrTime: any;
  formatedetaTime: any;
  constructor(public apiService: ApiCallService, public datePipe: DatePipe, public route: Router) { }

  ngOnInit() {
    this.getAllTodoList();
  }
  getAllTodoList() {
    this.apiService.GetAllTodoList().subscribe((res: any) => {
      if (res && res.length > 0) {
        res.forEach((item: any) => {
          // Format the current time and ETA time
          item.currTime = this.datePipe.transform(new Date(item.currTime), 'dd/MM/yyyy');
          item.etaTime = this.datePipe.transform(new Date(item.etaTime), 'dd/MM/yyyy');
          //item.etaTime = new Date(item.etaTime).toLocaleString();
        });
        this.data = res;
        this.adjustLayout();
        this.adjustGridDimensions();
      } else {
        console.error('No data received from API');
      }
    }
      , (error) => {
        console.error('Error fetching data from API:', error);
      });
  }

  editBtn(id: any) {
      this.route.navigate(['/admin/sidenav/todoDetail', id]);
  }
  deleteBtn(id: any) {
    if (id > 0) {
      confirm("Are you sure you want to delete this task?");
      this.apiService.DeleteTodoList(id).subscribe((res) =>{
        notify(res.message, "success", 2000);
        this.getAllTodoList();
      },(error)=>{
        notify(error.message, "error", 2000);
      })
    }
    console.log("Delete button clicked", id);
  }
  addTask() {
    this.route.navigate(['/admin/sidenav/todoDetail']);
  }
  adjustLayout() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    this.gridHeight = windowHeight - 200;

    if (windowWidth < 768) {
      this.popupWidth = '90%';
      this.popupHeight = '80%';
    } else if (windowWidth < 1024) {
      this.popupWidth = '80%';
      this.popupHeight = '80%';
    } else {
      this.popupWidth = '60%';
      this.popupHeight = '70%';
    }
  }

  adjustGridDimensions(): void {
    const windowWidth = window.innerWidth;

    this.gridHeight = window.innerHeight - 150;

    if (windowWidth < 768) {
      this.columnWidths = {
        id: 70,
        task: 70,
        currTime: 70,
        etaTime: 60,
        btn: 70,
      };
    } else if (windowWidth < 1024) {
      this.columnWidths = {
        id: 90,
        task: 80,
        currTime: 90,
        etaTime: 90,
        btn: 90,
      };
    }

  }
}
