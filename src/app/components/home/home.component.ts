import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EChartOption } from 'echarts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  chart1Opt: EChartOption = {
    series: [
      {
        name: '',
        type: 'pie',
        radius: '75%',
        center: ['45%', '50%'],
        data: [{ value: 70, name: '70% of healthy \n carbs and fats', itemStyle: { color: 'rgb(135, 181, 56)' } },
        { value: 30, name: '30% \n protein', itemStyle: { color: 'rgb(66, 103, 178)' } }],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }

  private dates = this.generateMonths();
  generateMonths() {
    let months = [];

    for (let i = 1; i < 37; i++) {
      months.push(i);
    }

    return months;
  }

  private data = this.generateData()
  generateData() {
    let gains = [];
    let currentGain = 0;

    for (let i = 1; i < 37; i++) {
      if (i < 13) {
        currentGain = currentGain + 1;
        gains.push(currentGain);
      }
      else if (i < 25) {
        currentGain = currentGain + 0.5;
        gains.push(currentGain);
      }
      else {
        currentGain = currentGain + 0.25;
        gains.push(currentGain);
      }
    }

    return gains;
  }

  chart2Opt: EChartOption = {
    tooltip: {
      trigger: 'axis',
      position: function (pt) {
        return [pt[0], '10%'];
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: this.dates
    },
    yAxis: {
      type: 'value',
      boundaryGap: [0, '100%']
    },
    dataZoom: [{
      type: 'inside',
      start: 0,
      end: 10
    }, {
      start: 0,
      end: 10,
      handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
      handleSize: '80%',
      handleStyle: {
        color: '#fff',
        shadowBlur: 3,
        shadowColor: 'rgba(0, 0, 0, 0.6)',
        shadowOffsetX: 2,
        shadowOffsetY: 2
      }
    }],
    series: [
      {
        type: 'line',
        smooth: true,
        symbol: 'none',
        sampling: 'average',
        itemStyle: {
          color: 'rgb(244, 66, 66)'
        },
        areaStyle: {
          color:'rgba(244, 66, 66, 200)'
        },
        data: this.data
      }
    ]
  }

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(() => {
      window.scrollTo(0, 0)
    });
  }
}
