import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { CheckboxService } from 'src/app/services/checkbox.service';

@Component({
  selector: 'app-lower',
  templateUrl: './lower.component.html',
  styleUrls: ['./lower.component.scss']
})
export class Lower2019JuneComponent implements OnInit {

  qMark: string;

  constructor(private router: Router, private cbService: CheckboxService) { }

  ngOnInit() {
    this.router.events.subscribe(() => {
      window.scrollTo(0, 0)
    });

    this.cbService.getLowerCbs().forEach(function(cbId) {
      document.getElementById(cbId)['checked'] = true;
    });
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
    window.scrollBy(0, -80);
  }

  cbCheck(event) {
    let cb = event['srcElement']['id'];
    this.cbService.toggleLowerCb(cb);
  }

  clear(){
    this.cbService.getLowerCbs().forEach(function (cbId) {
      document.getElementById(cbId)['checked'] = false;
    });
    this.cbService.clearLowerCbs();
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
