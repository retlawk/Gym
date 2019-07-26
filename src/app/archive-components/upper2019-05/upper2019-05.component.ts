import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upper2019-05',
  templateUrl: './upper2019-05.component.html',
  styleUrls: ['./upper2019-05.component.scss']
})
export class Upper201905Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
    window.scrollBy(0, -80);
  }

}
