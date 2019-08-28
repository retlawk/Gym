import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/localstorage.service';
import { SchemeDay } from 'src/app/classes/scheme-day';
import { InMemorySchemeDays } from './schemedays';

@Component({
  selector: 'app-scheme',
  templateUrl: './scheme.component.html',
  styleUrls: ['./scheme.component.scss']
})
export class SchemeComponent implements OnInit {

  schemeDays: SchemeDay[];
  currentDay: number;

  constructor(private router: Router, private storage: LocalStorageService) { }

  ngOnInit() {
    this.router.events.subscribe(() => {
      window.scrollTo(0, 0)
    });
    
    this.storage.setSchemeDays(InMemorySchemeDays);
    this.schemeDays = this.storage.getSchemeDays();
    console.log(this.schemeDays);

    // if (this.schemeDays == [] || this.schemeDays === null || this.schemeDays === undefined) {
    //   this.storage.setSchemeDays(InMemorySchemeDays);
    // }
    // this.currentDay = 0;

    console.log(this.schemeDays);

    // this.schemeDays.forEach(function(schemeDay) {
    //   schemeDay.exercises.forEach(function(exercise) {
    //     if (document.getElementById(exercise.name) !== null && exercise.checked == true) {
    //       document.getElementById(exercise.name)['checked'] = true;
    //     }
    //   })
    // });
  }

  public openScheme(event) {
    console.log('scheme: ' + event.srcElement.innerText);
    this.schemeDays[this.currentDay] = this.schemeDays.filter(x => x.name === event.srcElement.innerText)[0];
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
    window.scrollBy(0, -80);
  }

  cbCheck(event) {
    let cbName = event['srcElement']['id'];
    console.log(cbName);
    if (this.schemeDays[this.currentDay].exercises.find(x => x.name == cbName).checked){
      this.schemeDays[this.currentDay].exercises.find(x => x.name == cbName).checked = false;
    }
    else {
      this.schemeDays[this.currentDay].exercises.find(x => x.name == cbName).checked = true;
    }
    this.storage.setSchemeDays(this.schemeDays);
  }

  clear(){
    // this.storage.getCbs().forEach(function (cbId) {
    //   if (document.getElementById(cbId) !== null && cbId.startsWith('1')) {
    //     document.getElementById(cbId)['checked'] = false;
    //   }
    // });
    // this.storage.clearCbs();
  }
}
