import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private localStorage: Storage;

  constructor() { 
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

  getItem(id: string): string {
    return localStorage.getItem(id);
  }

  getAllPersistedItems(): Array<string> {
    let allItems = new Array<string>();
    
    var keys = Object.keys(localStorage); 
    keys.forEach (key => {
      allItems.push(key);
    });

    return allItems;
  }

  persistItem(id: string, value: string): void {
    this.localStorage.setItem(id, value);
  }

  removeItem(id: string): void {
    this.localStorage.removeItem(id);
  }

  clear() {
    this.localStorage.clear();
  }
}
