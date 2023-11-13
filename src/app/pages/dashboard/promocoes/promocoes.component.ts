import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-promocoes',
  templateUrl: './promocoes.component.html',
  styleUrls: ['./promocoes.component.scss'],
})
export class PromocoesComponent implements OnInit {
  public errorMsg!: string;
  public successMsg!: string;
  public promoList!: any[];
  public addForm: FormGroup = this.formbuilder.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
    option: ['', [Validators.required]],
    date: ['', [Validators.required]],
    url: ['', [Validators.required]],
  });
  ngOnInit(): void {

  }
  public search(value: string) {}
  constructor(
    private formbuilder: FormBuilder,
    private firestore: AngularFirestore
  ) {}
  public addPromo() {
    this.firestore
      .collection('promocoes')
      .add(this.addForm.value)
      .then((res) => {
        this.successMsg = `Promoção ${this.addForm.value['name']} adicionada com sucesso!`;
      })
      .catch((err) => {
        this.errorMsg = err.message;
      });
  }
}
