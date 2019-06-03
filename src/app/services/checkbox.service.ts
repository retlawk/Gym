import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckboxService {
  private lowerCbsChecked: Array<string>;
  private upperCbsChecked: Array<string>;
  private localStorage: Storage;

  constructor() { 
    this.lowerCbsChecked = new Array<string>();
    this.upperCbsChecked = new Array<string>();
    
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


  getLowerCbs(): Array<string> {
    this.lowerCbsChecked = JSON.parse(this.localStorage.getItem('lowerCbsChecked'));
    if (this.lowerCbsChecked === undefined || this.lowerCbsChecked === null) {
      this.lowerCbsChecked = new Array<string>();
    }
    return this.lowerCbsChecked;
  }

  toggleLowerCb(cb: string) {
    if(this.lowerCbsChecked.some(x => x === cb)) {
      let cbFromArray = this.lowerCbsChecked.find(x => x === cb);
      var index = this.lowerCbsChecked.indexOf(cbFromArray);
      if (index !== -1) this.lowerCbsChecked.splice(index, 1);
    }
    else {
      this.lowerCbsChecked.push(cb);
    }
    
    this.localStorage.setItem('lowerCbsChecked', JSON.stringify(this.lowerCbsChecked));
  }

  clearLowerCbs(): void {
    this.localStorage.removeItem('lowerCbsChecked');
    this.lowerCbsChecked = new Array<string>();
  }

  getUpperCbs(): Array<string> {
    this.upperCbsChecked = JSON.parse(this.localStorage.getItem('upperCbsChecked'));
    if (this.upperCbsChecked === undefined || this.upperCbsChecked === null) {
      this.upperCbsChecked = new Array<string>();
    }
    return this.upperCbsChecked;
  }

  toggleUpperCb(cb: string) {
    if(this.upperCbsChecked.some(x => x === cb)) {
      let cbFromArray = this.upperCbsChecked.find(x => x === cb);
      var index = this.upperCbsChecked.indexOf(cbFromArray);
      if (index !== -1) this.upperCbsChecked.splice(index, 1);
    }
    else {
      this.upperCbsChecked.push(cb);
    }

    this.localStorage.setItem('upperCbsChecked', JSON.stringify(this.upperCbsChecked));
  }

  clearUpperCbs() {
    this.localStorage.removeItem('upperCbsChecked');
    this.upperCbsChecked = new Array<string>();
  }
}
