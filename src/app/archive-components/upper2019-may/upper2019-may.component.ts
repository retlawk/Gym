import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upper2019-may',
  templateUrl: './upper2019-may.component.html',
  styleUrls: ['./upper2019-may.component.scss']
})
export class Upper2019MayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
    window.scrollBy(0, -80);
  }

}
