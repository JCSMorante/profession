import { Component, OnInit } from '@angular/core';
import { IPostPetition } from 'src/app/models/IPostPetition';
import { IPreferences } from 'src/app/models/IPreferences';
import { IProfession as ICalifications } from 'src/app/models/IProfession';
import { PrincipalFormService } from 'src/app/services/principal-form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  showLoad: boolean = false;

  constructor(private service: PrincipalFormService) { }

  ngOnInit(): void {
  }

  califications: ICalifications[] = [
    {
      name: "Matemáticas",
      score: NaN
    },
    {
      name: "Escritura crítica",
      score: NaN
    },
    {
      name: "Sociales",
      score: NaN
    },
    {
      name: "Ciencias naturales",
      score: NaN
    },
    {
      name: "Lenguas",
      score: NaN
    },
  ];

  preferences: IPreferences[] = [
    {
      name: "Humanidades",
      score: 0
    },
    {
      name: "Ingenieria",
      score: 0
    },
    {
      name: "Ciencia",
      score: 0
    },
    {
      name: "Salud",
      score: 0
    },

  ];


  getService(){
    this.showLoad = true;
    let body: IPostPetition = {
      engineering: this.preferences.find(m => m.name == 'Ingenieria')?.score ?? 0,
      foreign_language:  this.califications.find(m => m.name == 'Lenguas')?.score ?? 0,
      health: this.preferences.find(m => m.name == 'Salud')?.score ?? 0,
      mathematics: this.califications.find(m => m.name == 'Matemáticas')?.score ?? 0,
      natural_sciences : this.califications.find(m => m.name == 'Ciencias naturales')?.score ?? 0,
      science : this.preferences.find(m => m.name == 'Ciencia')?.score ?? 0,
      social_sciences: this.califications.find(m => m.name == 'Sociales')?.score ?? 0,
      written_expression: this.califications.find(m => m.name == 'Escritura crítica')?.score ?? 0,
    }
    this.service.GetProfession(body);
  }
}
