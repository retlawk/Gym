import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckboxService {
  private cbsChecked: Array<string>;
  private localStorage: Storage;

  constructor() { 
    this.cbsChecked = new Array<string>();
    
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

  getCbs(): Array<string> {
    this.cbsChecked = JSON.parse(this.localStorage.getItem('cbsChecked'));
    if (this.cbsChecked === undefined || this.cbsChecked === null) {
      this.cbsChecked = new Array<string>();
    }
    return this.cbsChecked;
  }

  toggleCb(cb: string) {
    if(this.cbsChecked.some(x => x === cb)) {
      let cbFromArray = this.cbsChecked.find(x => x === cb);
      var index = this.cbsChecked.indexOf(cbFromArray);
      if (index !== -1) this.cbsChecked.splice(index, 1);
    }
    else {
      this.cbsChecked.push(cb);
    }
    
    this.localStorage.setItem('cbsChecked', JSON.stringify(this.cbsChecked));
  }

  clearCbs(): void {
    this.localStorage.removeItem('cbsChecked');
    this.cbsChecked = new Array<string>();
  }
}
