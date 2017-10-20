import { Injectable } from '@angular/core';

import { Workout } from 'models/workout'
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { WorkoutLog } from 'models/workoutLog';

@Injectable()
export class DbService {

  public baseUrl = "https://polar-badlands-78608.herokuapp.com/api"

  constructor(private http: HttpClient) { }

  public getAllWorkouts(): Observable<any> {
    return this.http.get(this.baseUrl + '/workouts')
  }

  public getWorkout(id: string): Observable<any> {
    return this.http.get(this.baseUrl + '/workout/' + id)
  }

  public getAllWorkoutLogs(): Observable<any> {
    return this.http.get(this.baseUrl + '/workoutLogs')
  }

  public getWorkoutLog(id: string): Observable<any> {
    return this.http.get(this.baseUrl + 'workoutLog/' + id)
  }

  public createWorkout(workout: Workout) {
    const req = this.http.post(this.baseUrl + 'createWorkout', workout)
    req.subscribe()
  }

  public createWorkoutLog(workoutLog: WorkoutLog) {
    const req = this.http.post(this.baseUrl + 'createWorkoutLog', workoutLog)
    req.subscribe()
  }

}
