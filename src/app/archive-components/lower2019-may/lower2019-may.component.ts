import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lower2019-may',
  templateUrl: './lower2019-may.component.html',
  styleUrls: ['./lower2019-may.component.scss']
})
export class Lower2019MayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
    window.scrollBy(0, -80);
  }

}
