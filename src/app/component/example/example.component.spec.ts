import { element } from 'protractor';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { of } from 'rxjs/observable/of';

import { ExampleComponent } from './example.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from '../../service/http.service';

describe('ExampleComponent', () => {
  let examplecomponent;
  let fixture;
  // tslint:disable-next-line:no-shadowed-variable
  let element;
  let httpservice;

  beforeEach(() => TestBed.configureTestingModule({
    declarations: [
      ExampleComponent
    ],
    imports: [ HttpClientModule ],
    providers: [ HttpService ]
  }));

  beforeEach(inject([HttpService], servicess => {
    httpservice = servicess;
    fixture = TestBed.createComponent(ExampleComponent);
    examplecomponent = fixture.componentInstance;
    element = fixture.nativeElement;
  }));

  it('should test method in component', async(() => {
    examplecomponent.getAll();
  }));
});
