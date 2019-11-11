import { SchemeDay } from 'src/app/classes/scheme-day';
import { Exercise } from 'src/app/classes/exercise';

export let InMemoryScheme1911: SchemeDay[] = [
  {
    dayNumber: 1, exercises: [
      new Exercise("Mat Workouts", "Endurance", 10),
      new Exercise("Deadlift", "Strenght", 3),
      new Exercise("Back Extension", "Endurance", 3),
      new Exercise("Dumbbell Row", "Strenght", 3),
      new Exercise("Wide Grib Row", "Mass", 3),
      new Exercise("Bicep & Hammer Curl", "SuperSet", 3),
      new Exercise("Cable Drag Curl", "Mass", 3),
      new Exercise("Shrug & Pullover", "SuperSet", 3),
      new Exercise("Standing Lat Pushdown", "Endurance", 3)
    ]
  },
  {
    dayNumber: 2, exercises: [
      new Exercise("Abs Machine", "Mass", 3),
      new Exercise("Leg Raises", "Endurance", 3),
      new Exercise("Benchpress", "Strenght", 3),
      new Exercise("Flyes & Close Grib", "Mass", 3),
      new Exercise("Incline Dumbbell Press", "Mass", 3),
      new Exercise("Shoulder Press", "Strenght", 3),
      new Exercise("Skull crushers", "Mass", 3),
      new Exercise("One/two arm tricep extensions", "SuperSet", 3),
      new Exercise("Lateral & Front Raises", "Endurance", 3),
      new Exercise("Bent Over Raise", "Endurance", 3)
    ]
  },
  {
    dayNumber: 3, exercises: [
      new Exercise("Mat Workouts", "Endurance", 10),
      new Exercise("Barbell Squat", "Strenght", 4),
      new Exercise("Leg & Calve Press", "Mass", 4),
      new Exercise("Dumbbell Walking Lunge", "Endurance", 2),
      new Exercise("Bicep & Hammer Curl", "SuperSet", 3),
      new Exercise("Cable Drag Curl", "Mass", 3),
      new Exercise("Leg Extensions", "Mass", 3),
      new Exercise("Standing Calf Raises", "Endurance", 3),
      new Exercise("Abductor & Adductor", "SuperSet", 3)
    ]
  },
  {
    dayNumber: 4, exercises: [
      new Exercise("Abs Machine", "Mass", 3),
      new Exercise("Leg Raises", "Endurance", 3),
      new Exercise("Wide Grib Pull Ups", "Strenght", 3),
      new Exercise("Chest Dip", "Mass", 3),
      new Exercise("Hand Stand Push-Up", "Strenght", 3),
      new Exercise("Close Grib Pull Ups", "Mass", 3),
      new Exercise("Bench Dips", "Endurance", 3),
      new Exercise("Skull crushers", "Mass", 3),
      new Exercise("One/two arm tricep extensions", "SuperSet", 3),
      new Exercise("Face Pulls", "Endurance", 3)
    ]
  }
]