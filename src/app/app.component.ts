import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private swipeCoord?: [number, number];
  private swipeTime?: number;

  constructor(private router: Router) {}

  swipe(e: TouchEvent, when: string): void {
    const coord: [number, number] = [e.changedTouches[0].clientX, e.changedTouches[0].clientY];
    const time = new Date().getTime();

    if (when === 'start') {
      this.swipeCoord = coord;
      this.swipeTime = time;
    } else if (when === 'end') {
      const direction = [coord[0] - this.swipeCoord[0], coord[1] - this.swipeCoord[1]];
      const duration = time - this.swipeTime;

      if (duration < 1000 //
        && Math.abs(direction[0]) > 30 // Long enough
        && Math.abs(direction[0]) > Math.abs(direction[1] * 3)) { // Horizontal enough
        
        const swipe = direction[0] < 0 ? 'next' : 'previous';
        switch(this.router.url) { 
          case "/home": { 
             if (swipe === "next") this.router.navigateByUrl("/scheme");
             break; 
          } 
          case "/scheme": { 
            if (swipe === "previous") this.router.navigateByUrl("/home");
            if (swipe === "next") this.router.navigateByUrl("/timer");
            break; 
          } 
          case "/timer": { 
            if (swipe === "previous") this.router.navigateByUrl("/scheme");
            if (swipe === "next") this.router.navigateByUrl("/archive");
            break; 
          } 
          case "/archive": { 
            if (swipe === "previous") this.router.navigateByUrl("/timer");
            break; 
          } 
        };
      }
    }
  }

}
