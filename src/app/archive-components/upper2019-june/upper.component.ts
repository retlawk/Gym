import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckboxService } from 'src/app/services/checkbox.service';

@Component({
  selector: 'app-upper',
  templateUrl: './upper.component.html',
  styleUrls: ['./upper.component.scss']
})
export class Upper2019JuneComponent implements OnInit {

  qMark: string;
  
  constructor(private router: Router, private cbService: CheckboxService) { }

  ngOnInit() {
    this.router.events.subscribe(() => {
      window.scrollTo(0, 0)
    });

    this.cbService.getUpperCbs().forEach(function (cbId) {
      document.getElementById(cbId)['checked'] = true;
    });
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
    window.scrollBy(0, -80);
  }

  cbCheck(event) {
    let cb = event['srcElement']['id'];
    this.cbService.toggleUpperCb(cb);
  }

  clear(){
    this.cbService.getUpperCbs().forEach(function (cbId) {
      document.getElementById(cbId)['checked'] = false;
    });
    this.cbService.clearUpperCbs();
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
