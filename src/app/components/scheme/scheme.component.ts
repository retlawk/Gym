import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SchemeDay } from 'src/app/classes/scheme-day';
import { InMemoryScheme1912 } from './scheme1912';
import { LocalStorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-scheme',
  templateUrl: './scheme.component.html',
  styleUrls: ['./scheme.component.scss']
})
export class SchemeComponent implements OnInit {
  schemeDays: SchemeDay[];
  currentDay: number;

  constructor(private router: Router, private storageService: LocalStorageService) { }

  ngOnInit() {
    this.router.events.subscribe(() => {
      window.scrollTo(0, 0)
    });
    
    this.schemeDays = InMemoryScheme1912;
    this.currentDay = Number(this.storageService.getItem("currentDay"));
    if (this.currentDay === null || this.currentDay < 0 || isNaN(this.currentDay)) this.currentDay = 0;
  }

  ngAfterViewInit(): void {
    this.checkPersistedCheckboxes()
  }

  ngAfterViewChecked(): void {
    this.checkPersistedCheckboxes()
  }

  openScheme(event) {
    this.currentDay = event.srcElement.innerText - 1;
    this.storageService.persistItem("currentDay", this.currentDay.toString());
    this.checkPersistedCheckboxes()
  }

  checkPersistedCheckboxes() {
    this.storageService.getAllPersistedItems().forEach(function (cbId) {
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

    if (this.storageService.getItem(cbName)) {
      document.getElementById(cbName)['checked'] = false;
      this.storageService.removeItem(cbName);
    }
    else {
      document.getElementById(cbName)['checked'] = true;
      this.storageService.persistItem(cbName, cbName);
    }
  }

  clear(){
    this.storageService.getAllPersistedItems().forEach(function (cbId) {
      if (document.getElementById(cbId) !== null) {
        document.getElementById(cbId)['checked'] = false;
      }
    });
    this.storageService.clear();
  }
}
