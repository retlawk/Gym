import { SchemeDay } from 'src/app/classes/scheme-day';
import { Exercise } from 'src/app/classes/exercise';

export let InMemoryScheme1910: SchemeDay[] = [
  {
    dayNumber: 1, exercises: [
      new Exercise("Warming up", "SuperSet", 1),
      new Exercise("Mat workouts", "Endurance", 10),
      new Exercise("Oblique crunches", "Mass", 2),
      new Exercise("Squat", "Strenght", 4),
      new Exercise("Deadlift", "Mass", 3),
      new Exercise("Millitary Press", "Mass", 3),
      new Exercise("Shrug & Pullover", "SuperSet", 3),
      new Exercise("Leg & Calve Press", "SuperSet", 3),
      new Exercise("Lunges", "Endurance", 3),
      new Exercise("Leg Extension", "Mass", 3)
    ]
  },
  {
    dayNumber: 2, exercises: [
      new Exercise("Warming up", "SuperSet", 1),
      new Exercise("Benchpress", "Strenght", 4),
      new Exercise("Incl dumbell press", "Mass", 3),
      new Exercise("Pull Up & Chest Dip", "SuperSet", 3),
      new Exercise("Dumbbell Row", "Mass", 3),
      new Exercise("Wide Grib Row", "Mass", 3),
      new Exercise("Face Pulls", "Endurance", 3),
      new Exercise("Standing Lat Pushdown", "Endurance", 3),
      new Exercise("Cable Drag Curl", "Mass", 3),
      new Exercise("Cable Tricep Extension", "Mass", 3)
    ]
  },
  {
    dayNumber: 3, exercises: [
      new Exercise("Warming up", "SuperSet", 1),
      new Exercise("Abs Machine", "Mass", 3),
      new Exercise("Leg raises", "Mass", 3),
      new Exercise("Oblique Crunch", "Endurance", 2),
      new Exercise("Deadlift", "Strenght", 3),
      new Exercise("Squat", "Mass", 3),
      new Exercise("Leg & Calve Press", "SuperSet", 2),
      new Exercise("Shoulder Press", "Strenght", 3),
      new Exercise("Dumbbell Bench Shrugs", "Mass", 3),
      new Exercise("Abductor & Adductor", "SuperSet", 3)
    ]
  },
  {
    dayNumber: 4, exercises: [
      new Exercise("Warming up", "SuperSet", 1),
      new Exercise("Bent Over Rows", "Mass", 4),
      new Exercise("One Arm Cable Row", "Mass", 3),
      new Exercise("Wide Grib Row", "Mass", 3),
      new Exercise("Pull Up & Chest Dip", "SuperSet", 3),
      new Exercise("Incl Benchpress", "Strenght", 3),
      new Exercise("Fly & Squeeze", "SuperSet", 3),
      new Exercise("Tight Grib Benchpress", "Mass", 3),
      new Exercise("Dumbbell Curls", "Mass", 3),
      new Exercise("Skullcrushers", "Mass", 3)
    ]
  }
]