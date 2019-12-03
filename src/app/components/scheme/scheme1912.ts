import { SchemeDay } from 'src/app/classes/scheme-day';
import { Exercise } from 'src/app/classes/exercise';

export let InMemoryScheme1912: SchemeDay[] = [
  {
    dayNumber: 1, exercises: [
      new Exercise("Warming up", "SuperSet", 1),
      new Exercise("Abs Mat Workouts", "Endurance", 10),
      new Exercise("Deadlift", "Strenght", 3),
      new Exercise("Back Extension", "Endurance", 3),
      new Exercise("Wide Grib Row", "Strenght", 4),
      new Exercise("Dumbbell Row", "Mass", 3),
      new Exercise("Bicep & Hammer Curl", "SuperSet", 3),
      new Exercise("Cable Drag Curl", "Mass", 3),
      new Exercise("Shrug", "Endurance", 3),
      new Exercise("Standing Lat Pushdown", "Endurance", 3)
    ]
  },
  {
    dayNumber: 2, exercises: [
      new Exercise("Warming up", "SuperSet", 1),
      new Exercise("Incline Benchpress", "Strenght", 4),
      new Exercise("Flyes & Close Grib", "SuperSet", 3),
      new Exercise("Incline Dumbbell Press", "Mass", 3),
      new Exercise("Decline Dumbbell Press", "Mass", 3),
      new Exercise("Shoulder Press", "Strenght", 3),
      new Exercise("Lateral & Front Raise", "SuperSet", 3),
      new Exercise("Cable Tricep Extensions", "SuperSet", 3),
      new Exercise("Overhead Tricep Extension", "Mass", 3),
      new Exercise("Bent Over Raise", "Endurance", 3),
    ]
  },
  {
    dayNumber: 3, exercises: [
      new Exercise("Warming up", "SuperSet", 1),
      new Exercise("Abs Machine", "Mass", 3),
      new Exercise("Barbell Squat", "Strenght", 4),
      new Exercise("Leg & Calve Press", "SuperSet", 3),
      new Exercise("Bicep & Hammer Curl", "SuperSet", 3),
      new Exercise("Concentration Curl", "Mass", 3),
      new Exercise("Leg Extension", "Mass", 3),
      new Exercise("Standing Calf Raise", "Mass", 2),
      new Exercise("Abductor", "Endurance", 3),
      new Exercise("Adductor", "Endurance", 3)
    ]
  },
  {
    dayNumber: 4, exercises: [
      new Exercise("Warming up", "SuperSet", 1),
      new Exercise("Leg Raise", "Endurance", 3),
      new Exercise("Close & Wide Pull Up", "SuperSet", 3),
      new Exercise("Chest Dip", "Mass", 3),
      new Exercise("Millitary Press", "Strenght", 3),
      new Exercise("Bench Dip", "Endurance", 3),
      new Exercise("Close Grip Push Up", "Mass", 3),
      new Exercise("Cable Tricep Extension", "SuperSet", 3),
      new Exercise("Overhead Tricep Extension", "Mass", 3),
      new Exercise("Face Pull", "Endurance", 3)
    ]
  }
]