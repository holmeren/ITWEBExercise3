import { Component, OnInit } from '@angular/core';
import { Exercise } from 'models/exercise';
import { FormArray, FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Workout } from 'models/workout';

@Component({
  selector: 'app-edit-workout',
  templateUrl: './edit-workout.component.html',
  styleUrls: ['./edit-workout.component.css']
})
// The structure of this component is heavily inspired from http://brophy.org/post/nested-reactive-forms-in-angular2/
export class EditWorkoutComponent implements OnInit {
  public workout: Workout;
  public workoutForm: FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.workout = this.getWorkoutData();
    this.workoutForm = this.toFormGroup(this.workout)
  }

  private getWorkoutData() : Workout {
    // Returns mock data
    let exercise1: Exercise = {
      name: "Squat",
      description: "Lift the damn weight",
      reps: "5",
      sets: 5,
    }
    let exercise2: Exercise = {
      name: "Bench press",
      description: "Push the damn weight",
      reps: "5",
      sets: 5,
    }
    let quickWorkout: Workout = {exercises: [], title: "Quick workout"};
    quickWorkout.exercises = [exercise1, exercise2];
    return quickWorkout;
  }

  private toFormGroup(workout: Workout) : FormGroup {
    const formGroup = this._fb.group({
      title: [ workout.title, Validators.required ],
    })
    return formGroup;
  }

  public onSubmit() {
    if(!this.workoutForm.valid) {
      console.error("Form invalid");
      return false;
    }

    //submit this to DB instead of console logging
    console.log(this.workoutForm.value.exercises)  
  } 

}
