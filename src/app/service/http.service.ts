import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpService {
    private BASE_COMMENTS_API = 'https://my-json-server.typicode.com/typicode/demo/comments';
    private BASE_POSTS_API = 'https://my-json-server.typicode.com/typicode/demo/posts';
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
    return this.http.get(this.BASE_POSTS_API);
 }

 public getComments() {
     return this.http.get(this.BASE_COMMENTS_API);
 }

 public sendData(body: any) {
     return this.http.post('https://my-json-server.typicode.com/typicode/demo/posts', body);
 }

}
