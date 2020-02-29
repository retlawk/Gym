import { SchemeDay } from 'src/app/classes/scheme-day';
import { Exercise } from 'src/app/classes/exercise';

export let InMemoryScheme2002: SchemeDay[] = [
  {
    dayNumber: 1, exercises: [
      new Exercise("Dumbbell Warming", "Endurance", 1),
      new Exercise("Abs Mat Workouts", "Endurance", 10),
      new Exercise("Benchpress", "Strenght", 3),
      new Exercise("Flyes & Close Grib", "SuperSet", 3),
      new Exercise("Wide Grib Row", "Strenght", 3),
      new Exercise("Lat Pulldown", "Mass", 3),
      new Exercise("Bicep Curls", "SuperSet", 3),
      new Exercise("Cable Drag Curl", "Mass", 3),
      new Exercise("Shrugs", "Mass", 3),
      new Exercise("Face Pulls", "Endurance", 3)
    ]
  },
  {
    dayNumber: 2, exercises: [
      new Exercise("Kicks Warming", "Endurance", 1),
      new Exercise("Barbell Squat", "Strenght", 3),
      new Exercise("Deadlift", "Strenght", 3),
      new Exercise("Leg raises", "Endurance", 3),
      new Exercise("Leg Extension", "Mass", 3),
      new Exercise("Calves machine", "Mass", 3),
      new Exercise("Cable Tricep Extensions", "Mass", 3),
      new Exercise("Overhead Tricep Extension", "Mass", 3),
      new Exercise("Shoulder Press", "Strenght", 3),
      new Exercise("Lateral & Front Raise", "SuperSet", 3)
    ]
  },
  {
    dayNumber: 3, exercises: [
      new Exercise("Dumbbell Warming", "Endurance", 1),
      new Exercise("Abs Mat Workouts", "Mass", 3),
      new Exercise("Incline Dumbbell Press", "Strenght", 3),
      new Exercise("Dips", "Mass", 3),
      new Exercise("Pull Ups", "SuperSet", 3),
      new Exercise("Close Grib Row", "Mass", 3),
      new Exercise("Bicep Curls", "SuperSet", 3),
      new Exercise("Concentration Curl", "Mass", 3),
      new Exercise("Shrugs", "Mass", 2),
      new Exercise("Chest Stretches", "Endurance", 2)
    ]
  },
  {
    dayNumber: 4, exercises: [
      new Exercise("Kicks Warming", "Endurance", 1),
      new Exercise("Barbell Squat", "SuperSet", 3),
      new Exercise("Back Extension", "Endurance", 3),
      new Exercise("Abs Machine", "Endurance", 3),
      new Exercise("Abductor & Adductor", "SuperSet", 3),
      new Exercise("Calves Machine", "Strenght", 3),
      new Exercise("Close Grib Benchpress", "Mass", 3),
      new Exercise("Triceps Dips", "Mass", 3),
      new Exercise("Millitary Press", "Mass", 3),
      new Exercise("Bent Over Raise", "Endurance", 2)
    ]
  }
]