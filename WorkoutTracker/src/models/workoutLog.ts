import { Exercise } from "models/exercise";

export interface WorkoutLog {
    date: string,
    exercises?: Exercise[]
}