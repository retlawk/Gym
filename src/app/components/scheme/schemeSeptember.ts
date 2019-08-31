import { SchemeDay } from 'src/app/classes/scheme-day';
import { Exercise } from 'src/app/classes/exercise';

export let InMemorySchemeSeptember: SchemeDay[] = [
  {
    name: '1', exercises: [
      new Exercise("Deadlift", "Strenght", 3),
      new Exercise("Benchpress", "Strenght", 3),
      new Exercise("Dumbbell Row", "Mass", 3),
      new Exercise("Incl Dumbbell Press", "Mass", 3),
      new Exercise("Face Pulls", "Endurance", 2),
      new Exercise("Pull Up & Chest Dip", "SuperSet", 3),
      new Exercise("Cable Drag Curl", "Mass", 3),
      new Exercise("Cable Tricep Extension", "Mass", 3),
      new Exercise("Standing Lat Pushdown", "Endurance", 2)
    ]
  },
  {
    name: '2', exercises: [
      new Exercise("Mat workouts", "Endurance", 10),
      new Exercise("Barbell Squat", "Strenght", 3),
      new Exercise("Shoulder Press", "Strenght", 3),
      new Exercise("Leg & Calve Press", "SuperSet", 3),
      new Exercise("Shrug & Pullover", "SuperSet", 3),
      new Exercise("Lateral & Front Raises", "SuperSet", 2),
      new Exercise("Leg Extension", "Mass", 3),
      new Exercise("Leg Curl Machine", "Mass", 2),
      new Exercise("Standing Arnold", "Endurance", 2)
    ]
  },
  {
    name: '3', exercises: [
      new Exercise("Bent Over Rows", "Mass", 3),
      new Exercise("Incl Dumbbell Press", "Strenght", 3),
      new Exercise("One Arm Cable Row", "Mass", 3),
      new Exercise("Chest Machine", "Mass", 3),
      new Exercise("Pull ups", "Mass", 2),
      new Exercise("Cable Fly & Drag Up", "SuperSet", 3),
      new Exercise("Wide Grib Row", "Mass", 3),
      new Exercise("Dumbbell Curls", "Mass", 3),
      new Exercise("Overhead Triceps Extension", "Mass", 3)
    ]
  },
  {
    name: '4', exercises: [
      new Exercise("Abs Machine", "Mass", 3),
      new Exercise("Oblique Crunch", "Endurance", 2),
      new Exercise("Wide Squat", "Strenght", 3),
      new Exercise("Military Press", "Mass", 3),
      new Exercise("Leg & Calve Press", "SuperSet", 2),
      new Exercise("Bent-Over Raise", "Endurance", 3),
      new Exercise("Dumbbell Bench Shrugs", "Mass", 3),
      new Exercise("Abductor & Adductor", "SuperSet", 3),
      new Exercise("Close Grib Pull Ups", "Mass", 2)
    ]
  }
]