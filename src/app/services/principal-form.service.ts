import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPostPetition } from '../models/IPostPetition';

@Injectable({
  providedIn: 'root'
})
export class PrincipalFormService {

  constructor(private http: HttpClient) { }

  public GetProfession(info: IPostPetition) {
    debugger;
    console.log("Datos enviados:" + JSON.stringify(info));

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*' });

    this.http.post<any>('http://e670-35-230-108-162.ngrok.io/output', JSON.stringify(info), { 'headers': headers })
      .subscribe(data => {
        debugger;
        console.log(data)
      });
  }
}
