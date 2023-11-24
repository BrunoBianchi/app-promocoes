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
  public editBool:boolean = false;
  public successMsg!: string;
  public searchList: Array<{name:string,date:string,url:string,option:string,description:string,uid:string}> = [];

  public promoList: Array<{name:string,date:string,url:string,option:string,description:string,uid:string}> = [];
  public addForm: FormGroup = this.formbuilder.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
    option: ['', [Validators.required]],
    date: ['', [Validators.required]],
    url: ['', [Validators.required]],
  });
  public editForm: FormGroup = this.formbuilder.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
    option: ['', [Validators.required]],
    date: ['', [Validators.required]],
  });
  async ngOnInit() {
     await this.crude.Promocoes.subscribe((promos) => { 
      promos.forEach(promo=>{
        this.searchList.push({
          uid:promo.id,
          name: promo.get('name'),
          date: promo.get('date'),
          url:promo.get('url'),
          description:promo.get('description'),
          option: promo.get('option')
         });
        this.promoList.push({
          uid:promo.id,
          name: promo.get('name'),
          date: promo.get('date'),
          url:promo.get('url'),
          description:promo.get('description'),
          option: promo.get('option')
        });
      })

    })
    
  }
  public search(value: string) {
    this.promoList = this.searchList.filter((promo) => {return promo.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())});
  }
  constructor(
    private formbuilder: FormBuilder,
    private firestore: AngularFirestore,
    private crude: PromoService
  ) {}
  public addPromo() {
    console.log(this.addForm.value.name)
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
  public removePromo(id:string) {
    this.crude.removePromo(id).then((res)=>{ 
      this.promoList = this.promoList.filter((promo)=>{return promo.uid !== id})
    }).catch((err)=>{ 
      console.log(err);
    })
  }
  public enableEdit(id:string) {
    if(this.editBool == false) {
      this.editBool = true;
      let promo = this.promoList.find((promo)=>{return promo.uid === id});
      this.editForm.setValue({
        name: promo?.name,
        description: promo?.description,
        option: promo?.option,
        date: promo?.date,
      });
    }else {
      this.editBool = false;
      this.editForm.setValue({
        name: '',
        description: '',
        option: '',
        date: '',
      });
    }

  }
  public editPromo(id:string) {

    this.crude.edtiPromo(id,this.editForm.value).then((res)=>{ 
      this.editBool = false;
      this.promoList[ this.promoList.findIndex((promo)=>{return promo.uid ==id})] = this.editForm.value;
    }).catch(err=>{
      console.log(err);
    })
  }
}
