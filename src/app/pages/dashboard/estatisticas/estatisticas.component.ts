import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import Chart from 'chart.js/auto';
import { PromoService } from 'src/app/shared/services/promos/crude.service';
import { UserService } from 'src/app/shared/services/users/user.service';

@Component({
  selector: 'app-estatisticas',
  templateUrl: './estatisticas.component.html',
  styleUrls: ['./estatisticas.component.scss'],
})
export class EstatisticasComponent implements OnInit, AfterViewInit {
  public categoriaas: any;
  public usuarios: any;
  public categorias = [
    'alimentos',
    'eletronicos',
    'decoracoes',
    'roupas',
    'viagens',
    'saude',
    'infantil',
  ];
  public loadingMsg!: string;
  public users: any = [];
  public categoriaData: Array<Number> = [];
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
    this.categorias.forEach((categoria: string) => {
      this.crude.Catergorias(categoria).then((data: any) => {
        this.categoriaData.push(data.size);
      });
    });
    this.categoriaas = await this.createChart('categorias', 'doughnut', {
      labels: [
        'alimentos',
        'eletronicos',
        'decoracoes',
        'roupas',
        'viagens',
        'saude',
        'infantil',
      ],
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
            'rgb(255, 86, 224)',
          ],
          hoverOffset: 4,
        },
      ],
    });
    await this.crudeUsers.Users.then((data: any) => {
      this.users.push(data.size);
    }).then(async () => {
      this.usuarios = await this.createChart('usuarios', 'bar', {
        labels: ['Usuários Total'],
        datasets: [
          {
            label: 'Usuários ',
            data: [this.users[0]],
            backgroundColor: ['rgb(255, 99, 132)'],
            hoverOffset: 4,
          },
        ],
      });
    });

    this.loadingMsg = 'Carregando...';
  }
  async ngAfterViewInit() {
    setTimeout(() => {
      this.categoriaas.update();
      this.usuarios.update();
      this.loadingMsg = '';
    }, 700);
  }
  constructor(
    private crude: PromoService,
    private auth: AngularFireAuth,
    private crudeUsers: UserService
  ) {}
}
