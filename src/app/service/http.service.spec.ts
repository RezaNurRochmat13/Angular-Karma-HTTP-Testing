import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
/* tslint:disable:no-unused-variable */

import { TestBed, async, inject, resetFakeAsyncZone } from '@angular/core/testing';
import { HttpModule, Http, BaseRequestOptions, XHRBackend, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { HttpService } from './http.service';

describe('Service: HTTP service', () => {
  let service;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule, HttpClientModule ],
    providers: [
      HttpService,
      {provide: XHRBackend, useClass: MockBackend}
    ]
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
      { id: 2, title: 'Post 2' }
    ];
    service.getComments().subscribe(res => {
       expect(res).toBe(JSON.stringify(body));
    });
  }));

  it('should return an Observable Value', inject([HttpService, XHRBackend], (postService, mockBackend) => {
    mockBackend.connections.subscribe((connections) => {
      const mockResponse = ['Hai'];
      // tslint:disable-next-line:no-shadowed-variable
      mockBackend.connections.subscribe((connections) => {
        connections.mockResponse(new Response(new ResponseOptions({
          body: JSON.stringify(mockResponse)
        })));
      });
    });
  }));

describe('Fake HTTPClient Response', () => {
  it('should expect value GET', async(inject([HttpService, HttpTestingController],
    (http: HttpService, backend: HttpTestingController) => {
      http.getComments().subscribe();
        backend.expectOne({
          url: 'https://my-json-server.typicode.com/typicode/demo/comments',
          method: 'GET'
        });
      })));

      it('should NOT fail when sending an un-matched request',
      async(inject([HttpService, HttpTestingController], (http: HttpService, backend: HttpTestingController) => {
        http.getComments().subscribe();
        backend.match('1');
        // backend.verify();
      })));
  });

  describe('test HTTP POST Method', () => {
    it('should return Observable Comment with status OK', inject([HttpService, XHRBackend], (http, mockBackend) => {
      const statusResponse = [
        {
          status: 'OK'
        }
      ];

      const fakeComments = [
        {
          id: 3,
          body: 'test',
          postId: 1
        }
      ];

      http.sendData(fakeComments).subscribe((statusResponse) => {
        expect(statusResponse.status).toEqual('OK');
      });
    }));

    it('should return HTTP Method Types', async(inject([HttpService, HttpTestingController], (http, mockBackend) => {
      const fakeComments = [
        {
          id: 3,
          body: 'test',
          postId: 1
        }
      ];
      http.sendData(fakeComments).subscribe();
      mockBackend.expectOne({
        method: 'POST'
      });
    })));
  });
});
