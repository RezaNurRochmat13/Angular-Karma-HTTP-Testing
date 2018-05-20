import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpService {

constructor(
    private http: HttpClient
) { }


/**
 * @author FE Team 4
 * @method GETData
 * @returns Observable
 * @memberof HttpService
 */
public getData() {
    return this.http.get('https://my-json-server.typicode.com/typicode/demo/posts');
 }

 public sendData(body: any) {
     return this.http.post('https://my-json-server.typicode.com/typicode/demo/posts', body);
 }

}
