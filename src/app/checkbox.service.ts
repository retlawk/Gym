import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckboxService {

  lowerCbsChecked: Array<string>;
  upperCbsChecked: Array<string>;

  constructor() { 
    this.lowerCbsChecked = new Array<string>();
    this.upperCbsChecked = new Array<string>();
  }
}
