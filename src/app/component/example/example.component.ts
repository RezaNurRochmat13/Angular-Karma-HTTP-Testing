import { HttpService } from './../../service/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  public post: any;
  public angka1 = 2;
  public angka2 = 4;
  public hasil;

  constructor(
    private httpSvc: HttpService
  ) { }

  ngOnInit() {
  }

  private getAll() {
    this.httpSvc.getData().subscribe((response => {
      this.post = response;
    }));
  }

  private addNumber() {
    this.hasil = this.angka1 + this.angka2;
    return this.hasil;
  }

  private divideNumber() {
    this.hasil = this.angka1 / this.angka2;
    return this.hasil;
  }

  private checkResponseBody() {
    const body = [
      {id: 1, name_users: 'Peter', address: 'California'},
      {id: 2, name_users: 'John', address: 'NYC'},
      {id: 3, name_users: 'Sam', address: 'Canada'},
      {id: 4, name_users: 'Adrian', address: 'Pittsburgh'},
      {id: 5, name_users: 'James', address: 'Sillicon Valley'},
    ];

    return body;
  }
}
