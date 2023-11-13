import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-estatisticas',
  templateUrl: './estatisticas.component.html',
  styleUrls: ['./estatisticas.component.scss'],
})
export class EstatisticasComponent implements OnInit {
  public chart: any;
  public chart1: any;
  public createChart(name: string, type: any, data: any) {
    return new Chart(name, {
      type: type,
      data: data,
      options: {
        aspectRatio: 2.5,
      },
    });
  }
  ngOnInit(): void {
    this.chart = this.createChart('MyChart1', 'bar', {
      labels: ['Red', 'Blue', 'Yellow'],
      datasets: [
        {
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
          ],
          hoverOffset: 4,
        },
      ],
    });
    this.chart = this.createChart('MyChart', 'line', {
      labels: ['Red', 'Blue', 'Yellow'],
      datasets: [
        {
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
          ],
          hoverOffset: 4,
        },
      ],
    });
  }
}
