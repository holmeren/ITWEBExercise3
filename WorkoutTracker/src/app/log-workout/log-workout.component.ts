import { Component, OnInit } from '@angular/core';
import { WorkoutLog } from 'models/workoutLog';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-log-workout',
  templateUrl: './log-workout.component.html',
  styleUrls: ['./log-workout.component.css']
})
export class LogWorkoutComponent implements OnInit {
  public workoutLog: WorkoutLog
  public workoutLogform: FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.workoutLog = {date: new Date().toLocaleString(), exercises: []}
    this.workoutLogform = this.toFormGroup(this.workoutLog)
  }

  private toFormGroup(workoutLog: WorkoutLog) : FormGroup {
    const formGroup = this._fb.group({
      date: [ workoutLog.date ],
    })
    return formGroup;
  }

  public onSubmit() {
    if(!this.workoutLogform.valid) {
      console.error("Form invalid")
      return false
    }

    // submit workout log to db
    console.log(this.workoutLogform.value)
  }

}
