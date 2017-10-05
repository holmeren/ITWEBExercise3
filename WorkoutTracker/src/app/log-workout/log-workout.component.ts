import { Component, OnInit } from '@angular/core';
import { WorkoutLog } from 'models/workoutLog';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DbService } from 'app/services/db.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-workout',
  templateUrl: './log-workout.component.html',
  styleUrls: ['./log-workout.component.css']
})
export class LogWorkoutComponent implements OnInit {
  public workoutLog: WorkoutLog
  public workoutLogForm: FormGroup;

  constructor(private _fb: FormBuilder, private dbService: DbService, private router: Router) { }

  ngOnInit() {
    this.workoutLog = {date: new Date().toLocaleString(), exercises: []}
    this.workoutLogForm = this.toFormGroup(this.workoutLog)
    console.log(this.workoutLogForm)
  }

  private toFormGroup(workoutLog: WorkoutLog) : FormGroup {
    const formGroup = this._fb.group({
      date: [ workoutLog.date ],
    })
    return formGroup;
  }

  public onSubmit() {
    if(!this.workoutLogForm.valid) {
      console.error("Form invalid")
      return false
    }
    this.dbService.createWorkoutLog(this.workoutLogForm.value)
    this.router.navigateByUrl("workout-logs")
  }

}
