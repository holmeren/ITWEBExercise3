import { Component, OnInit } from '@angular/core';

import { Workout } from 'models/workout';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit {
  private workout: Workout;

  constructor() { }

  ngOnInit() {
  }

}
