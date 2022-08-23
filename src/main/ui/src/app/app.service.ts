import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  rootURL = 'http://ml-handwriting-env.eba-6d8svthj.us-east-2.elasticbeanstalk.com/api';

  trainingRequest(request: any) {
      return this.http.post(this.rootURL + '/train', request);
  }

  recognitionRequest(request: any) {
    return this.http.post(this.rootURL + '/identify', request);
  }

}
