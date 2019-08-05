import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EChartOption } from 'echarts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  foodPieChart: EChartOption = {
    series: {
      name: '',
      type: 'pie',
      radius: '75%',
      center: ['45%', '50%'],
      data: [{ value: 70, name: '70% of healthy \n carbs and fats', itemStyle: { color: 'rgb(135, 181, 56)' } },
      { value: 30, name: '30% \n protein', itemStyle: { color: 'rgb(52,89,176)' } }],
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
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
        currentGain = currentGain + 0.9;
        gains.push(currentGain.toFixed(2));
      }
      else if (i < 25) {
        currentGain = currentGain + 0.45;
        gains.push(currentGain.toFixed(2));
      }
      else {
        currentGain = currentGain + 0.22;
        gains.push(currentGain.toFixed(2));
      }
    }

    return gains;
  }

  maxGainsBarChart: EChartOption = {
    color: ['rgb(52,89,176)'],
    grid:
    {
      top: '0%',
      bottom: '20%'
    },
    xAxis: {
      type: 'category',
      data: this.dates,
      name: 'Months',
      nameLocation: 'center',
      nameTextStyle: {
        padding: [7, 0, 0, 0]
      }
    },
    yAxis: {
      type: 'value',
      show: false
    },
    tooltip: {
      formatter: 'At month {b0}<br />you could have {c0}kg<br />of lean muscle gains.',
      position: [10, 10],
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    series: [{
      data: this.data,
      type: 'bar',
      show: false
    }]
  };

  labelRight = {
    normal: {
        position: 'right'
    }
  };
  strenghtChart: EChartOption = {
    color: ['rgb(52,89,176)'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {           
        type: 'shadow'        
      }
    },
    grid: {
      top: '0%',
      bottom: '20%'
    },
    xAxis: {
      type: 'value',
      position: 'top',
      axisLine: { show: false },
      axisLabel: { show: false },
      axisTick: { show: false },
      splitLine: { show: false }
    },
    yAxis: {
      type: 'category',
      axisLine: { show: false },
      axisLabel: { show: false },
      axisTick: { show: false },
      splitLine: { show: false },
      data: ['Benchpress', 'Shoulderpess', 'Cable rows', 'Squats', 'Deadlifts']
    },
    series: [
      {
        type: 'bar',
        label: {
          normal: {
            show: true,
            formatter: '{b}'
          }
        },
        data: [
          100, 80, 90, 120, 140
        ]
      }
    ]
  };

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(() => {
      window.scrollTo(0, 0)
    });
  }
}
