import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { WorkoutListComponent } from './workout-list/workout-list.component';
import { EditWorkoutComponent } from './edit-workout/edit-workout.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ExerciseListComponent } from './edit-workout/exercise-list/exercise-list.component';
import { ExerciseFormComponent } from './edit-workout/exercise-form/exercise-form.component';
import { DbService } from 'app/services/db.service';
import { LogWorkoutComponent } from './log-workout/log-workout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WorkoutLogListComponent } from './workout-log-list/workout-log-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { AuthInterceptorService } from 'app/services/auth-interceptor.service';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from 'app/services/auth-guard.service';

const appRoutes: Routes = [
  {path: '', component: WorkoutListComponent},
  {path: 'edit/:id', component: EditWorkoutComponent, canActivate: [AuthGuardService]},
  {path: 'edit', component: EditWorkoutComponent, canActivate: [AuthGuardService]},
  {path: 'log-workout', component: LogWorkoutComponent, canActivate: [AuthGuardService]},
  {path: 'workout-logs', component: WorkoutLogListComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    WorkoutListComponent,
    EditWorkoutComponent,
    ExerciseListComponent,
    ExerciseFormComponent,
    LogWorkoutComponent,
    NavbarComponent,
    WorkoutLogListComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DbService, HttpClient, AuthInterceptorService,
  AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
