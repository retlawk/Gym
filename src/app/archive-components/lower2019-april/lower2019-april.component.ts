import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lower2019-april',
  templateUrl: './lower2019-april.component.html',
  styleUrls: ['./lower2019-april.component.scss']
})
export class Lower2019AprilComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
    window.scrollBy(0, -80);
  }

}
