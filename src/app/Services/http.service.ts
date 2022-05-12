import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) {

  }

  async GetUsers(){
    return await this.http.get("https://localhost:44327/api/Users/GetUsers").toPromise();
  }
}
