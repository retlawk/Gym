import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/localstorage.service';
import { SchemeDay } from 'src/app/classes/scheme-day';
import { Exercise, ExerType } from 'src/app/classes/exercise';

@Component({
  selector: 'app-scheme',
  templateUrl: './scheme.component.html',
  styleUrls: ['./scheme.component.scss']
})
export class SchemeComponent implements OnInit {

  schemeDays: SchemeDay[] = [
    { name: '1', exercises: [
      new Exercise("Deadlift", ExerType.Strenght, 3),
      new Exercise("Benchpress", ExerType.Strenght, 3),
      new Exercise("Dumbbell Row", ExerType.Mass, 3),
      new Exercise("Incl Dumbbell Press", ExerType.Mass, 3),
      new Exercise("Face Pulls", ExerType.Endurance, 2),
      new Exercise("Pull Up & Chest Dip", ExerType.SuperSet, 3),
      new Exercise("Cable Drag Curl", ExerType.Mass, 3),
      new Exercise("Cable Tricep Extension", ExerType.Mass , 3),
      new Exercise("Standing Lat Pushdown", ExerType.Endurance , 2)
    ] },
    { name: '2', exercises: [] },
    { name: '3', exercises: [] },
    { name: '4', exercises: [] }
  ]
  currentDay: SchemeDay = this.schemeDays[0];

  constructor(private router: Router, private storage: LocalStorageService) { }

  ngOnInit() {
    this.router.events.subscribe(() => {
      window.scrollTo(0, 0)
    });

    // this.cbService.getCbs().forEach(function(cbId) {
    //   if (document.getElementById(cbId) !== null){
    //     document.getElementById(cbId)['checked'] = true;
    //   }
    // });
  }

  public open(event) {
    console.log('scheme: ' + event.srcElement.innerText);
    let schemeDay = event.srcElement.innerText;
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
    window.scrollBy(0, -80);
  }

  cbCheck(event) {
    let cb = event['srcElement']['id'];
    this.storage.toggleCb(cb);
  }

  clear(){
    this.storage.getCbs().forEach(function (cbId) {
      if (document.getElementById(cbId) !== null && cbId.startsWith('1')) {
        document.getElementById(cbId)['checked'] = false;
      }
    });
    this.storage.clearCbs();
  }
}
