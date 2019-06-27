import { Component, OnInit } from '@angular/core';
import { TimerSettings } from 'src/app/classes/timer-settings';
import { Router, NavigationStart } from '@angular/router';
import * as NoSleep from '../../../assets/js/NoSleep.min.js';

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

  private noiseMade: boolean;
  private startAudio: HTMLAudioElement;
  private doneAudio: HTMLAudioElement;

  private swipeCoord?: [number, number];
  private swipeTime?: number;

  constructor(private router: Router) {
    this.defaultState();

    this.startAudio = new Audio();
    this.startAudio.src = "./assets/audio/marioStart.mp3"
    this.startAudio.load();

    this.doneAudio = new Audio();
    this.doneAudio.src = "./assets/audio/done.mp3"
    this.doneAudio.load();

    router.events.forEach((event) => {
      if(event instanceof NavigationStart) {
        let tab = event.url.split('/').pop();
        if (tab !== "timer") {
          this.stop();
        }
      }
    });
  }

  swipe(e: TouchEvent, when: string): void {
    const coord: [number, number] = [e.changedTouches[0].clientX, e.changedTouches[0].clientY];
    const time = new Date().getTime();

    if (when === 'start') {
      this.swipeCoord = coord;
      this.swipeTime = time;
    } else if (when === 'end') {
      const direction = [coord[0] - this.swipeCoord[0], coord[1] - this.swipeCoord[1]];
      const duration = time - this.swipeTime;

      if (duration < 1000 //
        && Math.abs(direction[0]) > 30 // Long enough
        && Math.abs(direction[0]) > Math.abs(direction[1] * 3)) { // Horizontal enough
        
        stop();
      }
    }
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

    this.noSleep();
  }

  noSleep() {
    var noSleep = new NoSleep();
    function enableNoSleep() {
      noSleep.enable();
      document.removeEventListener('touchstart', enableNoSleep, false);
    }
    document.addEventListener('touchstart', enableNoSleep, false);
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
    this.startAudio.pause();
    this.doneAudio.pause();
    this.timerDone();
  }

  back() {
    this.setNumber--;
    this.noiseMade = false;
    this.startAudio.pause();
    this.doneAudio.pause();

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
    this.startAudio.pause();
    this.doneAudio.pause();
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
    this.timeLeft = this.timerSettings.restDuration;
    this.lblTrainRest = 'Rest';
  }

  train() {
    this.timeLeft = this.timerSettings.trainDuration;
    this.lblSetNumber = ((this.setNumber + 1) / 2).toString();
    this.lblTrainRest = 'Train';
  }

  timerDone() {
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
        this.noiseMade = true;
        this.startAudio.play();
      }
      else if (this.setNumber % 2 !== 0 && this.noiseMade === false && this.timeLeft < 1) {
        this.noiseMade = true;
        this.doneAudio.play();
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
