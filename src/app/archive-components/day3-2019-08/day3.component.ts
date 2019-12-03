import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckboxService } from 'src/app/services/checkbox.service';

@Component({
  selector: 'app-day3',
  templateUrl: './day3.component.html',
  styleUrls: ['./day3.component.scss']
})
export class Day3Component implements OnInit {

  qMark: string;

  constructor(private router: Router, private cbService: CheckboxService) { }

  ngOnInit() {
    this.router.events.subscribe(() => {
      window.scrollTo(0, 0)
    });

    this.cbService.getCbs().forEach(function(cbId) {
      if (document.getElementById(cbId) !== null){
        document.getElementById(cbId)['checked'] = true;
      }
    });
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
    window.scrollBy(0, -80);
  }

  cbCheck(event) {
    let cb = event['srcElement']['id'];
    this.cbService.toggleCb(cb);
  }
  
  clear(){
    this.cbService.getCbs().forEach(function (cbId) {
      if (document.getElementById(cbId) !== null && cbId.startsWith('3')){
        document.getElementById(cbId)['checked'] = false;
      }
    });
    this.cbService.clearCbs();
  }

  qMarkClicked(event) {
    if (this.qMark === event.srcElement.id){
      this.qMark = '';
    }
    else {
      this.qMark = event.srcElement.id;
    }
  }
}
