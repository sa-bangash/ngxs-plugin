import { Component, OnInit, Inject, Renderer2 } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { CheckForEligibility } from '../../loading/loading.actions';
import { tap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { LoadingState } from '../../loading/loading.state';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  @Select(LoadingState.studentList)
  studentList$: Observable<any>;
  constructor(private store: Store) {
  }

  ngOnInit() { }
  CheckForEligibility(id) {
    return this.store.dispatch(new CheckForEligibility(id));
  }

  trackByFn(index) {
    return index;
  }
}
