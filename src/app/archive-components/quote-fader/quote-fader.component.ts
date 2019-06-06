import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-quote-fader',
  templateUrl: './quote-fader.component.html',
  styleUrls: ['./quote-fader.component.scss']
})
export class QuoteFaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    var quoteFader = d3
      .select("#quoteFader")
      .append("h1")
      .style("font-size", '2em')
      .style("font-family", 'Arial, Helvetica, sans-serif')
      .style("text-align", 'center')
      .style("color", 'rgb(53, 92, 179)');

    let quotes = ["Father, forgive me for the gains i'm about to receive.",
      "Building cardiovascular endurance, aka the ability to lose gains.",
      "Life has it's ups and downs, we call them reps.",
      "No matter how hard you try, you'll never be as big as your pump.",
      "Reps for jesus.",
      "Bro, do you even lift?"];

    let i = 0;

    this.startQuoteFader(quoteFader, quotes, i);
  }

  startQuoteFader(quoteFader, quotes, i) {
    repeat();

    function repeat() {
      if (i === (quotes.length)) {
        i = 0;
      }
      i++

      quoteFader
        .text(quotes[i - 1])
        .style("opacity", 0)
        .transition()
        .duration(1)
        .transition()
        .duration(2000)
        .style("opacity", 1)
        .transition()
        .delay(1000)
        .duration(2000)
        .style("opacity", 0)
        .transition()
        .duration(1)
        .on("end", repeat);
    };
  }
}
