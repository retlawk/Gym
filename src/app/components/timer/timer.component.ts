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
  lblSetNumber: string;
  lblNrOfSets: string;

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
    this.startAudio.src = "./assets/audio/marioStart.mp3"
    this.startAudio.load();

    this.doneAudio = new Audio();
    this.doneAudio.src = "./assets/audio/done.mp3"
    this.doneAudio.load();
  }

  defaultState() {
    this.inputHidden = false;

    this.timerSettings = new TimerSettings();
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

  changed(event) {
    switch (event.srcElement.id) {
      case "tbSet": {
        if (event.srcElement.value < 5) {
          event.srcElement.value = 5;
          this.timerSettings.trainDuration = 5;
        }
        else if (event.srcElement.value > 99) {
          event.srcElement.value = 99;
          this.timerSettings.trainDuration = 99;
        }
        break;
      }
      case "tbRest": {
        if (event.srcElement.value < 5) {
          event.srcElement.value = 5;
          this.timerSettings.restDuration = 5;
        }
        else if (event.srcElement.value > 99) {
          event.srcElement.value = 99;
          this.timerSettings.restDuration = 99;
        }
        break;
      }
      case "tbNrOfSets": {
        if (event.srcElement.value < 1) {
          event.srcElement.value = 1;
          this.timerSettings.nrOfSets = 1;
        }
        else if (event.srcElement.value > 99) {
          event.srcElement.value = 99;
          this.timerSettings.nrOfSets = 99;
        }
        break;
      }
    }
  }

  start() {
    this.inputHidden = true;

    this.lblTrainRest = 'Get Ready';
    this.lblPauseResume = 'Pause';
    this.lblSetNumber = '0';
    this.lblNrOfSets = this.timerSettings.nrOfSets.toString();
    this.timeLeft = 10;

    this.countdown();
  }

  stop() {
    this.timerDone();
  }

  back() {
    this.setNumber--;
    this.noiseMade = false;

    if (this.setNumber < 1) {
      this.timerDone();
    }

    if (this.setNumber % 2 === 0) {
      this.rest();
    }
    else {
      this.train();
    }
  }

  next() {
    this.setNumber++;
    this.noiseMade = false;

    if (this.setNumber === this.nrOfIterations) {
      this.timerDone();
    }

    if (this.setNumber % 2 === 0) {
      this.rest();
    }
    else {
      this.train();
    }
  }

  rest() {
    //let content = document.getElementById('content');
    //content.style.background = "green";

    this.timeLeft = this.timerSettings.restDuration;
    this.lblTrainRest = 'Rest';
  }

  train() {
    //let content = document.getElementById('content');
    //content.style.background = "red";

    this.timeLeft = this.timerSettings.trainDuration;
    this.lblSetNumber = ((this.setNumber + 1) / 2).toString();
    this.lblTrainRest = 'Train';
  }

  timerDone() {
    //let content = document.getElementById('content');
    //content.style.background = "white";

    this.defaultState();
    clearInterval(this.interval);
  }

  toggle() {
    if (this.lblPauseResume === 'Pause') {
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
      if (this.setNumber % 2 === 0 && this.noiseMade === false && this.timeLeft < 4) {
        this.startAudio.play();
        this.noiseMade = true;
      }
      else if (this.setNumber % 2 !== 0 && this.noiseMade === false && this.timeLeft < 1) {
        this.doneAudio.play();
        this.noiseMade = true;
      }
      if (this.timeLeft > 0) {
        this.timeLeft = this.timeLeft - 0.01;
      }
      else {
        this.next();
      }
    }, 10)
  }
}
