import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { CheckboxService } from 'src/app/checkbox.service';

@Component({
  selector: 'app-lower',
  templateUrl: './lower.component.html',
  styleUrls: ['./lower.component.scss']
})
export class LowerComponent implements OnInit {

  qMark: string;

  constructor(private router: Router, private cbService: CheckboxService) { }

  ngOnInit() {
    this.router.events.subscribe(() => {
      window.scrollTo(0, 0)
    });

    this.cbService.lowerCbsChecked.forEach(function (cbId) {
      document.getElementById(cbId)['checked'] = true;
    });
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
    window.scrollBy(0, -80);
  }

  cbCheck(event) {
    let cb = event['srcElement']['id'];
    if(this.cbService.lowerCbsChecked.some(x => x === cb)) {
      let cbFromArray = this.cbService.lowerCbsChecked.find(x => x === cb);
      var index = this.cbService.lowerCbsChecked.indexOf(cbFromArray);
      if (index !== -1) this.cbService.lowerCbsChecked.splice(index, 1);
    }
    else {
      this.cbService.lowerCbsChecked.push(cb);
    }
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
