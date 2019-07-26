import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lower2019-05',
  templateUrl: './lower2019-05.component.html',
  styleUrls: ['./lower2019-05.component.scss']
})
export class Lower201905Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
    window.scrollBy(0, -80);
  }

}
