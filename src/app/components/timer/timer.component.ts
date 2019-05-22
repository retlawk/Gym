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
  timerRunning: boolean;
  pause: string;
  timerSettings: TimerSettings;
  timeLeft: number;
  interval;
  setNumber: number;
  train: boolean;
  trainOrRest: string;
  soundCreated: boolean;

  constructor(private router: Router) { 
    this.defaultState();
  }

  defaultState() {
    this.inputHidden = false;
    this.timerRunning = false;

    this.timerSettings =  new TimerSettings();
    this.timerSettings.setDuration = 45;
    this.timerSettings.restDuration = 15;
    this.timerSettings.nrOfSets = 10;

    this.setNumber = 1;
    this.train = true;
    this.soundCreated = false;
  }

  ngOnInit() {
    this.router.events.subscribe(() => {
      window.scrollTo(0, 0)
    });
  }

  start() {
    this.inputHidden = true;
    this.timerRunning = true;

    this.trainOrRest = 'Set: 1/' + this.timerSettings.nrOfSets;
    this.pause = 'Pause';

    this.timeLeft = this.timerSettings.setDuration;
    this.countdown();
  }

  stop() {
    clearInterval(this.interval);
    this.defaultState();
  }

  next() {
    if (this.setNumber < this.timerSettings.nrOfSets){
      if (!this.train){
        this.setNumber++;

        // train
        this.soundCreated = false;
        this.timeLeft = this.timerSettings.setDuration;
        this.train = true;
        this.trainOrRest = 'Set: ' + this.setNumber + '/' + this.timerSettings.nrOfSets;
      }
      else{
        // rest
        this.timeLeft = this.timerSettings.restDuration;
        this.train = false;
        this.trainOrRest = 'Rest';
      }
    }
    else {
      //Timer done
      this.defaultState();
      clearInterval(this.interval);
    }
  }

  playStartAudio(){
    let audio = new Audio();
    audio.src="./assets/audio/start.mp3"
    audio.load();
    audio.play();
  }

  countdown() {
    this.interval = setInterval(() => {
      if (!this.train && !this.soundCreated && this.timeLeft < 1){
        this.soundCreated = true;
        this.playStartAudio();
      }

      if(this.timeLeft > 0) {
        this.timeLeft = this.timeLeft - 0.01;
      } 
      else {
        this.next();
      }
    },10)
  }

  toggle() {
    if (this.timerRunning){
      this.timerRunning = false;
      this.pause = 'Resume'

      clearInterval(this.interval);
    }
    else {
      this.timerRunning = true;
      this.pause = 'Pause'

      this.countdown();
    }
  }

}
