import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { WorkoutComponent } from './workout/workout.component';
import { WorkoutListComponent } from './workout-list/workout-list.component';
import { EditWorkoutComponent } from './edit-workout/edit-workout.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ExerciseListComponent } from './edit-workout/exercise-list/exercise-list.component';
import { ExerciseFormComponent } from './edit-workout/exercise-form/exercise-form.component';
import { DbService } from 'app/services/db.service';
import { LogWorkoutComponent } from './log-workout/log-workout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WorkoutLogListComponent } from './workout-log-list/workout-log-list.component';

const appRoutes: Routes = [
  {path: '', component: WorkoutListComponent},
  {path: 'edit/:id', component: EditWorkoutComponent},
  {path: 'edit', component: EditWorkoutComponent},
  {path: 'log-workout', component: LogWorkoutComponent},
  {path: 'workout-logs', component: WorkoutLogListComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    WorkoutComponent,
    WorkoutListComponent,
    EditWorkoutComponent,
    ExerciseListComponent,
    ExerciseFormComponent,
    LogWorkoutComponent,
    NavbarComponent,
    WorkoutLogListComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DbService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
