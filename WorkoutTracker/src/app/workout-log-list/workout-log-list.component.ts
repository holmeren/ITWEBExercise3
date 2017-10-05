import { Component, OnInit } from '@angular/core';
import { WorkoutLog } from 'models/workoutLog';
import { DbService } from 'app/services/db.service';

@Component({
  selector: 'app-workout-log-list',
  templateUrl: './workout-log-list.component.html',
  styleUrls: ['./workout-log-list.component.css']
})
export class WorkoutLogListComponent implements OnInit {
  public workoutLogs: WorkoutLog[];

  constructor(private dbService: DbService) {
    dbService.getAllWorkoutLogs().subscribe(data => {
      this.workoutLogs = data.workoutLogs
    })
  }

  ngOnInit() {
  }

}
