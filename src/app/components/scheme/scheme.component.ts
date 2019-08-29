import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SchemeDay } from 'src/app/classes/scheme-day';
import { InMemorySchemeDays } from './schemedays';
import { CheckboxService } from 'src/app/services/checkbox.service';

@Component({
  selector: 'app-scheme',
  templateUrl: './scheme.component.html',
  styleUrls: ['./scheme.component.scss']
})
export class SchemeComponent implements OnInit {

  schemeDays: SchemeDay[];
  currentDay: number;

  constructor(private router: Router, private cbService: CheckboxService) { }

  ngOnInit() {
    this.router.events.subscribe(() => {
      window.scrollTo(0, 0)
    });
    
    this.schemeDays = InMemorySchemeDays;
    this.currentDay = 0;

    this.checkPersistedCheckboxes()
  }

  openScheme(event) {
    this.currentDay = event.srcElement.innerText - 1;
    this.checkPersistedCheckboxes()
  }

  checkPersistedCheckboxes() {
    this.cbService.getCbs().forEach(function (cbId) {
      if (document.getElementById(cbId) !== null) {
        document.getElementById(cbId)['checked'] = true;
      }
    });
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
    window.scrollBy(0, -80);
  }

  cbCheck(event) {
    let cbName = event['srcElement']['id'];
    this.cbService.toggleCb(cbName);
  }

  clear(){
    this.cbService.getCbs().forEach(function (cbId) {
      if (document.getElementById(cbId) !== null) {
        document.getElementById(cbId)['checked'] = false;
      }
    });
    this.cbService.clearCbs();
  }
}
