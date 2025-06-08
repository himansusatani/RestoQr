import { DatePipe, Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiCallService } from 'src/app/Services/api-call.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent {
  constructor(private location: Location, public route: ActivatedRoute, public router: Router, public apiService: ApiCallService, private datePipe: DatePipe) { }
  popupVisible = true;
  rFrom!: FormGroup;
  taskId!: number;
  ngOnInit(): void {
    this.rFrom = new FormGroup({
      task: new FormControl(),
      currTime: new FormControl(),
      etaTime: new FormControl(),
    });

    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.taskId = parseInt(this.route.snapshot.paramMap.get('id') || '0', 10);
      if (id) {
        this.apiService.GetAllTodoListById(id).subscribe((res) => {
          this.rFrom.patchValue({
            task: res.task,
            currTime: this.datePipe.transform(res.currTime, 'yyyy-MM-dd'),
            etaTime: this.datePipe.transform(res.etaTime, 'yyyy-MM-dd')
          });

        }, err => {
          console.log(err);
        }
        );
      }
    })
  }

  addeditButton() {
    this.apiService.InsertUpdateTodoList(this.rFrom.value, this.taskId).subscribe((res) => {
      console.log(res);
      this.router.navigate(['/admin/sidenav/todoList']);
      this.popupVisible = false;
    }
      , (error) => {
        console.error('Error saving data:', error);
      }
    );
  }

  onPopupHidden() {
    this.location.back();
    this.popupVisible = false;
  }
}
