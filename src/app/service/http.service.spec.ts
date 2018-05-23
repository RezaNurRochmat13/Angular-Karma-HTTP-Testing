import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
/* tslint:disable:no-unused-variable */

import { TestBed, async, inject, resetFakeAsyncZone } from '@angular/core/testing';
import { HttpService } from './http.service';

describe('Service: HTTP service', () => {
  let service;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule, HttpClientModule ],
    providers: [ HttpService ]
  }));

 beforeEach(inject([HttpService], layanan => {
  service = layanan;
 }));

 /**
  * @author FE Team 4
  * @method GetDataUnitTest
  * @return Object value
  */
  it('should retrieve value in API', async(() => {
    const body = [
      { id: 1, title: 'Post 1' },
      { id: 2, title: 'Post 2' },
      { id: 3, title: 'Post 4' }
    ];
    service.getData().subscribe(res => {
      expect(res).toContain({
        id: 1,
        title: 'Post 1'
      });
      expect(res).toContain({
        id: 2,
        title: 'Post 2'
      });
      expect(res).toContain({
        id: 3,
        title: 'Post 4'
       });
       expect(res).toEqual(body);
    });
  }));

  it('should return response body', () => {
    const bodyFake = ['Hahai'];
    service.getComments().subscribe(response => {
      expect(response).toContain({id: 1, body: 'some comment'});
      expect(response).toBe(bodyFake);
    });
  });
});
