import { Component, OnInit } from '@angular/core';

import { Workout } from "models/workout"
import { Exercise } from 'models/exercise';
import { DbService } from 'app/services/db.service';

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.css']
})
export class WorkoutListComponent implements OnInit {
  private workouts: Workout[] = [];

  constructor(private dbService: DbService) {
    this.dbService.getAllWorkouts().subscribe(data => {
      this.workouts = data.workouts
    })

    // Fetch data from server
    // this.workouts = this.dbService.getAllWorkouts()

    // Mock data
    // let exercise1: Exercise = {
    //   name: "Squat",
    //   description: "Lift the damn weight",
    //   reps: "5",
    //   sets: 5,
    // }
    // let exercise2: Exercise = {
    //   name: "Bench press",
    //   description: "Push the damn weight",
    //   reps: "5",
    //   sets: 5,
    // }
    // let quickWorkout: Workout = {exercises: [], name: "Quick workout"};
    // let anotherQuickWorkout: Workout = {exercises: [], name: "Another quick workout"};
    // quickWorkout.exercises = [exercise1, exercise2];
    // anotherQuickWorkout.exercises = [exercise1, exercise2]
    // this.workouts.push(quickWorkout, anotherQuickWorkout);
  }

  ngOnInit() {
  }

  public createWorkout(): void {

  }

}
