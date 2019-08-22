import { Injectable } from '@angular/core';
import { SchemeDay } from '../classes/scheme-day';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private schemeDays: Array<SchemeDay>;
  private localStorage: Storage;

  constructor() { 
    this.schemeDays = new Array<SchemeDay>();
    this.localStorage = window.localStorage;

    let dataAge = new Date(JSON.parse(this.localStorage.getItem('dataAge')));
    if (dataAge === undefined || dataAge === null) {
      dataAge = new Date();
    }
    let now = new Date();
     
    //Als de data ouder is dan 12 uur, verwijder alles.
    if ( (now.getTime() - 43200000) > dataAge.getTime()) {
      this.localStorage.clear();
      this.localStorage.setItem('dataAge', JSON.stringify(new Date()));
    }
  }

  setSchemeDays(schemeDays: SchemeDay[]): void {
    this.localStorage.setItem('SchemeDays', JSON.stringify(schemeDays));
  }

  getSchemeDays(): Array<SchemeDay> {
    this.schemeDays = JSON.parse(this.localStorage.getItem('SchemeDays'));
    if (this.schemeDays === undefined || this.schemeDays === null) {
      this.schemeDays = new Array<SchemeDay>();
    }
    return this.schemeDays;
  }

}
