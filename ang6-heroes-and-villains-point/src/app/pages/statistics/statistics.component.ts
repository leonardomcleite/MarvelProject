import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})

export class StatisticsComponent implements OnInit, OnDestroy {

  bubbleChartOptions = {
    responsive: true,
    scaleShowVerticalLines: false,
    scaleShowHorizontalLines: false,
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        },
        ticks: {
          max: 30,
          min: 4,
          stepSize: 2,
          fontSize: 18,
          // fontStyle: 'bold',
          fontFamily: 'Marvel'
        },
      }],
      yAxes: [{
        gridLines: {
          display: false
        },
        ticks: {
          max: 40,
          min: 0,
          stepSize: 5,
          fontSize: 18,
          // fontStyle: 'bold',
          fontFamily: 'Marvel'
        },
        scaleLabel: {
          display: true,
          labelString: '[Access]',
          fontSize: 18,
          fontFamily: 'Marvel'
        },
      }]
    },
    legend: {
      display: false,
      position: 'bottom',
      labels: {
        fontSize: 15,
        fontStyle: 'bold',
        fontFamily: 'Marvel'
      }
    }
  };

  // x: Idade, y: Acessos, r: Pessoas
  bubbleChartData: any[] = [{
      data: [{
          x: 13,
          y: 5,
          r: 15
        },
        {
          x: 30,
          y: 10,
          r: 10
        },
        {
          x: 20,
          y: 2,
          r: 15
        },
        {
          x: 23,
          y: 10,
          r: 10
        },
        {
          x: 17,
          y: 30,
          r: 15
        },
        {
          x: 15,
          y: 20,
          r: 10
        }
      ],
      label: 'Homens',
      backgroundColor: '#F9A825',
      // hoverBackgroundColor: '#F9A825',
      hoverBorderColor: '#F9A825',
    },
    {
      data: [{
          x: 12,
          y: 17,
          r: 20
        },
        {
          x: 9,
          y: 17,
          r: 10
        }
      ],
      label: 'Mulheres',
      backgroundColor: '#607D8B',
      // hoverBackgroundColor: 'rgba(162, 57, 202)'
      hoverBorderColor: '#607D8B',
    },
  ];

  lineChartOptions = {
    responsive: true,
    scaleShowVerticalLines: false,
    scaleShowHorizontalLines: false,
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        },
        ticks: {
          max: 24,
          min: 0,
          stepSize: 2,
          fontSize: 18,
          // fontStyle: 'bold',
          fontFamily: 'Marvel'
        },
        scaleLabel: {
          display: false,
          labelString: '[Hora]',
          fontSize: 18,
          fontFamily: 'Marvel'
        },
      }],
      yAxes: [{
        gridLines: {
          display: false
        },
        ticks: {
          // max: 40,
          // min: 0,
          // stepSize: 5,
          fontSize: 18,
          // fontStyle: 'bold',
          fontFamily: 'Marvel'
        },
        scaleLabel: {
          display: true,
          labelString: '[Acessos]',
          fontSize: 18,
          fontFamily: 'Marvel'
        },
      }]
    },
    legend: {
      display: false,
      position: 'bottom',
      labels: {
        fontSize: 15,
        fontStyle: 'bold',
        fontFamily: 'Marvel'
      }
    }
  };

  lineChartData: Array <any> = [{
      data: [0, 0, 1, 0, 10, 12, 10, 65, 59, 80, 81, 56, 55, 40, 1, 10, 4, 5],
      label: 'Acessos'
    }
  ];
  lineChartLabels: Array <any> = [];

  lineChartColors: Array < any > = [{ // grey
    backgroundColor: 'rgba(148,159,177,0.2)',
    borderColor: 'rgba(148,159,177,1)',
    pointBackgroundColor: 'rgba(148,159,177,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  }];
  lineChartLegend = true;
  lineChartType = 'line';
  timer: any;

  constructor() {}

  ngOnInit() {
    for (let index = 0; index <= 24; index++) {
      this.lineChartLabels.push(index.toString() + 'h');
    }
    this.randomize();
    this.timer = setInterval(() => {
      this.randomize();
    }, 10000);
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

  randomize(): void {
    const now = new Date().getHours();
    const _lineChartData: Array < any > = new Array(1);
    for (let i = 0; i < 1; i++) {
      _lineChartData[i] = {
        data: new Array(now),
        label: this.lineChartData[i].label
      };
      for (let j = 0; j < now; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }

  // events
  chartClicked(e: any): void {
    console.log(e);
  }

  chartHovered(e: any): void {
    console.log(e);
  }

  onChartClick(event) {
    console.log(event);
  }
}
