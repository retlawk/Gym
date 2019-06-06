import { Component, OnInit } from '@angular/core';
import * as NoSleep from '../../../assets/js/NoSleep.min.js';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';

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

  constructor(private router: Router) {
    router.events.forEach((event) => {
      if(event instanceof NavigationStart) {
        let tab = event.url.split('/').pop();
        let firstletter = tab.charAt(0).toUpperCase();
        let finalTab = firstletter + tab.substr(1);
        this.currentTab = finalTab.substr(0, 13);

        if (this.currentTab === ""){
          this.currentTab = "Home";
        }
      }
    });
  }

  ngOnInit() {
    this.checkScreenSize();
    let tab = window.location.href.split('/').pop();
    let firstletter = tab.charAt(0).toUpperCase();
    this.currentTab = firstletter + tab.substr(1);

    if (this.currentTab == "") {
      this.currentTab = "Home";
    }
  }

  onClickNoSleep() {
    var noSleep = new NoSleep();

    function enableNoSleep() {
      noSleep.enable();
      document.removeEventListener('touchstart', enableNoSleep, false);
    }
    
    // Enable wake lock.
    // (must be wrapped in a user input event handler e.g. a mouse or touch handler)
    document.addEventListener('touchstart', enableNoSleep, false);
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


}
