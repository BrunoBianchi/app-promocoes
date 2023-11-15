import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import Chart from 'chart.js/auto';
import { PromoService } from 'src/app/shared/services/promos/crude.service';

@Component({
  selector: 'app-estatisticas',
  templateUrl: './estatisticas.component.html',
  styleUrls: ['./estatisticas.component.scss'],
})
export class EstatisticasComponent implements OnInit, AfterViewInit {
  public chart: any;
  public chart2:any;
  public categorias=['alimentos','eletronicos','decoracoes','roupas','viagens','saude','infantil'];
  public loadingMsg!:string;
  public categoriaData:Array<Number> = [];
  public async createChart(name: string, type: any, data: any) {
    return await new Chart(name, {
      type: type,
      data: data,
      options: {
        aspectRatio: 2.5,
      },
    });
  }
  
  async ngOnInit() {
    this.categorias.forEach((categoria:string) => {
      this.crude.Catergorias(categoria).then((data:any) => {
        this.categoriaData.push(data.size);
      })
    });
    this.chart = await this.createChart('MyChart1', 'doughnut', {
      labels: ['alimentos','eletronicos','decoracoes','roupas','viagens','saude','infantil'],
      datasets: [
        {
          label: 'Promoções ',
          data: this.categoriaData,
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(255, 134, 86)',
            'rgb(100, 255, 86)',
            'rgb(86, 86, 255)',
            'rgb(255, 86, 224)'
          ],
          hoverOffset: 4,
        },
      ],
    })
    this.chart2 = await this.createChart('MyChart2', 'doughnut', {
      labels: ['alimentos','eletronicos','decoracoes','roupas','viagens','saude','infantil'],
      datasets: [
        {
          label: 'Promoções ',
          data: this.categoriaData,
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(255, 134, 86)',
            'rgb(100, 255, 86)',
            'rgb(86, 86, 255)',
            'rgb(255, 86, 224)'
          ],
          hoverOffset: 4,
        },
      ],
    })
    this.loadingMsg = 'Carregando...';
  }
  async ngAfterViewInit() {
    setTimeout(() => {
      this.chart.update();
      this.chart2.update();
      this.loadingMsg = '';
    },500);
  }
  constructor(private crude:PromoService,private auth:AngularFireAuth) {}
}
