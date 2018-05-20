import { HttpService } from './../../service/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  public post: any;

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



}
