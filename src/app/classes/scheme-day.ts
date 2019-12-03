import { Exercise } from './exercise';

export class SchemeDay {
    constructor(dayNumber, exercises) {
        this.dayNumber = dayNumber;
        this.exercises = exercises;
    }

    dayNumber: number;
    exercises: Exercise[];
}
