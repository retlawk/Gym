import { Component, OnInit } from '@angular/core';
import { TimerSettings } from 'src/app/timer-settings';
import { Router } from '@angular/router';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  inputHidden: boolean;
  lblPauseResume: string;
  lblTrainRest: string;

  timerSettings: TimerSettings;
  setNumber: number;
  nrOfIterations: number;
  timeLeft: number;
  interval;

  noiseMade: boolean;
  startAudio: HTMLAudioElement;
  doneAudio: HTMLAudioElement;

  constructor(private router: Router) { 
    this.defaultState();

    this.startAudio = new Audio();
    this.startAudio.src="./assets/audio/start.mp3"
    this.startAudio.load();

    this.doneAudio = new Audio();
    this.doneAudio.src="./assets/audio/done.mp3"
    this.doneAudio.load();
  }

  defaultState() {
    this.inputHidden = false;
    this.lblPauseResume = 'Pause';

    this.timerSettings =  new TimerSettings();
    this.timerSettings.trainDuration = 45;
    this.timerSettings.restDuration = 15;
    this.timerSettings.nrOfSets = 10;

    this.nrOfIterations = this.timerSettings.nrOfSets + this.timerSettings.nrOfSets; 
    this.setNumber = 0;
    this.noiseMade = false;
  }

  ngOnInit() {
    this.router.events.subscribe(() => {
      window.scrollTo(0, 0)
    });
  }

  changed(event){
    if (event.srcElement.value < 1){
      event.srcElement.value = 1;
    } 
    else if (event.srcElement.value > 99) {
      event.srcElement.value = 99;
    }
  }

  start() {
    this.inputHidden = true;

    this.lblTrainRest = 'Get Ready';
    this.timeLeft = 10;

    this.countdown();
  }

  stop() {
    clearInterval(this.interval);
    this.defaultState();
  }

  back() {
    this.setNumber--;
    this.noiseMade = false;

    if (this.setNumber < 1) {
      //Timer done, back to menu
      this.defaultState();
      clearInterval(this.interval);
    }

    if (this.setNumber % 2 === 0) {
      //rest
      this.timeLeft = this.timerSettings.restDuration;
      this.lblTrainRest = 'Rest';
    } 
    else {
     //train
     this.timeLeft = this.timerSettings.trainDuration;
     this.lblTrainRest = 'Set: ' + ((this.setNumber + 1) / 2) + '/' + this.timerSettings.nrOfSets;
    }
  }

  next() {
    this.setNumber++;
    this.noiseMade = false;

    if (this.setNumber ===  this.nrOfIterations) {
      //Timer done, back to menu
      this.defaultState();
      clearInterval(this.interval);
    }

    if (this.setNumber % 2 === 0) {
      //rest
      this.timeLeft = this.timerSettings.restDuration;
      this.lblTrainRest = 'Rest';
    } 
    else {
      //train
      this.timeLeft = this.timerSettings.trainDuration;
      this.lblTrainRest = 'Set: ' + ((this.setNumber + 1) / 2) + '/' + this.timerSettings.nrOfSets;
    }
  }

  toggle() {
    if (this.lblPauseResume === 'Pause'){
      this.lblPauseResume = 'Resume'
      clearInterval(this.interval);
    }
    else {
      this.lblPauseResume = 'Pause'
      this.countdown();
    }
  }

  countdown() {
    this.interval = setInterval(() => {
      if (this.setNumber % 2 === 0 && this.noiseMade === false && this.timeLeft < 0.1) {
        this.startAudio.play();
        this.noiseMade = true;
      }
      else if (this.setNumber % 2 !== 0 && this.noiseMade === false && this.timeLeft < 0.1) {
        this.doneAudio.play();
        this.noiseMade = true;
      }
      if(this.timeLeft > 0) {
        this.timeLeft = this.timeLeft - 0.01;
      } 
      else {
        this.next();
      }
    },10)
  }
}
