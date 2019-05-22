import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(() => {
      window.scrollTo(0, 0)
    });
  }

  ngAfterContentInit(): void {
    this.startQuoteFader();
  }

  startQuoteFader() {
    var quoteFader = d3
      .select("#quoteFader")
      .append("h1")
      .style("font-size", '2em')
      .style("font-family", 'Arial, Helvetica, sans-serif')
      .style("text-align", 'center')
      .style("color", 'rgb(53, 92, 179)');

    repeat();

    function repeat() {
      quoteFader
        .text("Father, forgive me for the gains i'm about to receive.")
        .style("opacity", 0)
        .transition()
        .duration(2000)
        .style("opacity", 1)
        .transition()
        .delay(1000)
        .duration(2000)
        .style("opacity", 0)
        .transition()
        .duration(1)
        .text("Bro, do you even lift?")
        .transition()
        .duration(2000)
        .style("opacity", 1)
        .transition()
        .delay(1000)
        .duration(2000)
        .style("opacity", 0)
        .on("end", repeat);
    };
  }
}
