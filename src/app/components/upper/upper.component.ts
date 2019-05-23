import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckboxService } from 'src/app/checkbox.service';

@Component({
  selector: 'app-upper',
  templateUrl: './upper.component.html',
  styleUrls: ['./upper.component.scss']
})
export class UpperComponent implements OnInit {

  constructor(private router: Router, private cbService: CheckboxService) { }

  ngOnInit() {
    this.router.events.subscribe(() => {
      window.scrollTo(0, 0)
    });

    this.cbService.upperCbsChecked.forEach(function (cbId) {
      document.getElementById(cbId)['checked'] = true;
    });
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
    window.scrollBy(0, -80);
  }

  cbCheck(event) {
    let cb = event['srcElement']['id'];
    if(this.cbService.upperCbsChecked.some(x => x === cb)) {
      let cbFromArray = this.cbService.upperCbsChecked.find(x => x === cb);
      var index = this.cbService.upperCbsChecked.indexOf(cbFromArray);
      if (index !== -1) this.cbService.upperCbsChecked.splice(index, 1);
    }
    else {
      this.cbService.upperCbsChecked.push(cb);
    }
  }

}
