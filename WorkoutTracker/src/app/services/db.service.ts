import { Injectable } from '@angular/core';

import { Workout } from 'models/workout'
import { HttpClient } from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DbService {

  private baseUrl = "https://polar-badlands-78608.herokuapp.com/api/"

  constructor(private http: HttpClient) { }

  // getWorkout(id: number): Promise<Workout> {

  // }

  public async getAllWorkouts(){
    
    var workouts = await this.http.get(this.baseUrl);
    workouts.subscribe(workouts => {
      return workouts;
    });
  }

  public async getWorkoutById(id: string){

  }

}
