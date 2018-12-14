import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  numeroUm: number;
  numeroDois: number;
  operacao: string;

  response: any = {};

  constructor(private http: HttpClient){

  }


    onClickExecutaroperacao(){
      const calculo = {
        numeroUm: this.numeroUm,
        numeroDois: this.numeroDois,
        operacao: this.operacao,
      };

      

      this.http.post('https://calculadoravinisibin.herokuapp.com/api/calculadora', calculo).subscribe(response => this.response = response)
    }

   
}
