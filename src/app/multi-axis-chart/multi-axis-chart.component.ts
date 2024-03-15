import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-multi-axis-chart',
  standalone: true,
  imports: [Chart],
  templateUrl: './multi-axis-chart.component.html',
  styleUrl: './multi-axis-chart.component.css'
})
export class MultiAxisChartComponent implements OnInit {

  chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: 'red',
        yAxisID: 'y-axis-1'
      },
      {
        label: 'Dataset 2',
        data: [28, 48, 40, 19, 86, 27, 90],
        borderColor: 'blue',
        yAxisID: 'y-axis-2'
      }
    ]
  };

  chartOptions = {
    scales: {
      yAxes: [
        {
          type: 'linear',
          display: true,
          position: 'left',
          id: 'y-axis-1',
        },
        {
          type: 'linear',
          display: true,
          position: 'right',
          id: 'y-axis-2',
          grid: {
            drawOnChartArea: false,
          },
        },
      ],
    },
  };

  constructor() { }

  ngOnInit(): void {
  }

}
