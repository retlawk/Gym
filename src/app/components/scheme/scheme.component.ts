import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-scheme',
  templateUrl: './scheme.component.html',
  styleUrls: ['./scheme.component.scss']
})
export class SchemeComponent implements OnInit {

  qMark: string;

  constructor(private router: Router, private storage: LocalStorageService) { }

  ngOnInit() {
    this.router.events.subscribe(() => {
      window.scrollTo(0, 0)
    });

    // this.cbService.getCbs().forEach(function(cbId) {
    //   if (document.getElementById(cbId) !== null){
    //     document.getElementById(cbId)['checked'] = true;
    //   }
    // });
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
    window.scrollBy(0, -80);
  }

  cbCheck(event) {
    let cb = event['srcElement']['id'];
    this.storage.toggleCb(cb);
  }

  clear(){
    this.storage.getCbs().forEach(function (cbId) {
      if (document.getElementById(cbId) !== null && cbId.startsWith('1')) {
        document.getElementById(cbId)['checked'] = false;
      }
    });
    this.storage.clearCbs();
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
