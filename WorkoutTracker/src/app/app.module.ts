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

const appRoutes: Routes = [
  {path: '', component: WorkoutListComponent},
  {path: 'edit', component: EditWorkoutComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    WorkoutComponent,
    WorkoutListComponent,
    EditWorkoutComponent,
    ExerciseListComponent,
    ExerciseFormComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
