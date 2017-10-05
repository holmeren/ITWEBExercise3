import { Component, OnInit, Input } from '@angular/core';
import { Exercise } from 'models/exercise';
import { FormArray, FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Workout } from 'models/workout';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { DbService } from 'app/services/db.service';

@Component({
  selector: 'app-edit-workout',
  templateUrl: './edit-workout.component.html',
  styleUrls: ['./edit-workout.component.css']
})
// The structure of this component is heavily inspired from http://brophy.org/post/nested-reactive-forms-in-angular2/
export class EditWorkoutComponent implements OnInit {
  public workout: Workout;
  public workoutForm: FormGroup;

  constructor(private _fb: FormBuilder, private route: ActivatedRoute, private dbService: DbService, private router: Router) { }

  ngOnInit() {
    this.workout = {name: "", exercises: []}
    this.workoutForm = this.toFormGroup(this.workout)
    
    this.route.params.subscribe(value => {
      // If value is null we need to create a new workout, not edit an existing one
      if(value.id != null) {
        // actually fetch the data from dbService.getWorkout instead
        this.workout = this.getWorkoutData(value.id);    
        //this.workout = this.getWorkout(value.id)    
        this.workoutForm = this.toFormGroup(this.workout)
        
      }
    })   
  }

  // Returns mock data, remove this at some point
  private getWorkoutData(id: number) : Workout {
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
    let quickWorkout: Workout = {exercises: [], name: "Quick workout"};
    quickWorkout.exercises = [exercise1, exercise2];
    return quickWorkout;
  }

  private toFormGroup(workout: Workout) : FormGroup {
    const formGroup = this._fb.group({
      name: [ workout.name, Validators.required ],
    })
    return formGroup;
  }

  public onSubmit() {
    if(!this.workoutForm.valid) {
      console.error("Form invalid");
      return false;
    }

    this.dbService.createWorkout(this.workoutForm.value)
    this.router.navigateByUrl("")
  } 

}
