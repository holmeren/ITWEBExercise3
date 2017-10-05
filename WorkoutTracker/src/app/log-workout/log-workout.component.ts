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
  public workoutLogForm: FormGroup;

  constructor(private _fb: FormBuilder) { }

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

    // submit workout log to db
    console.log(this.workoutLogForm.value)
  }

}
