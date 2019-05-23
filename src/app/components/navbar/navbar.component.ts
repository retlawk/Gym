import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class NavbarComponent implements OnInit {

  currentTab: string;
  currentTabHidden: boolean;

  constructor() { }

  ngOnInit() {
    this.checkScreenSize();
    let tab = window.location.href.split('/').pop();
    let firstletter = tab.charAt(0).toUpperCase();
    this.currentTab = firstletter + tab.substr(1);
  }

  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    if (window.innerWidth > 1000) {
      this.currentTabHidden = true;
    }
    else {
      this.currentTabHidden = false;
    }
  }

  navRouted(event) {
    this.currentTab = event['srcElement'].textContent;
  }

}
