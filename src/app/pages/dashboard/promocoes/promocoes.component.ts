import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PromoService } from 'src/app/shared/services/promos/crude.service';

@Component({
  selector: 'app-promocoes',
  templateUrl: './promocoes.component.html',
  styleUrls: ['./promocoes.component.scss'],
})
export class PromocoesComponent implements OnInit {
  public errorMsg!: string;
  public successMsg!: string;
  public promoList: Array<{name:string,date:string,url:string,option:string,description:string}> = [];
  public addForm: FormGroup = this.formbuilder.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
    option: ['', [Validators.required]],
    date: ['', [Validators.required]],
    url: ['', [Validators.required]],
  });
  ngOnInit(): void {
     this.crude.Promocoes.subscribe((promos) => { 
      promos.forEach(promo=>{
        this.promoList.push({
          name: promo.get('name'),
          date: promo.get('date'),
          url:promo.get('url'),
          description:promo.get('description'),
          option: promo.get('option')
        });
      })

    })
    
  }
  public search(value: string) {}
  constructor(
    private formbuilder: FormBuilder,
    private firestore: AngularFirestore,
    private crude: PromoService
  ) {}
  public addPromo() {
    this.firestore
      .collection('promocoes')
      .add(this.addForm.value)
      .then((res) => {
        this.successMsg = `Promoção ${this.addForm.value['name']} adicionada com sucesso!`;
        this.promoList.push(this.addForm.value);
      })
      .catch((err) => {
        this.errorMsg = err.message;
      });
  }
}
