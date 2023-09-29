import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestLogin } from '../models/RequestLogin';
import { Observable } from 'rxjs';
import { ResponseLogin } from '../models/ResponseLogin';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private HttpClient: HttpClient) { }

  public doLogin(requestLogin: RequestLogin): Observable<ResponseLogin> {
    return this.HttpClient.post<ResponseLogin>('http://localhost:8080/api/login', requestLogin)
  }
}