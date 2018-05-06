import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import * as jwt_decode from 'jwt-decode';

export const TOKEN_NAME: string = 'jwt_token';

@Injectable()
export class AuthService {

  private url: string = 'http://localhost:8000/api/user';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  isUserLoggedIn(): boolean{
    //Check if logged
    if(!!this.getToken() && !this.isTokenExpired())
    {
      return true;
    }

    return false;
  }

  getToken(): string {
    return localStorage.getItem(TOKEN_NAME);
  }

  setToken(token: string): void {
    localStorage.setItem(TOKEN_NAME, token);
  }

  getTokenExpirationDate(token: string): Date {
    const decoded = jwt_decode(token);

    if (decoded.exp === undefined) return null;

    const date = new Date(0); 
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token?: string): boolean {
    if(!token) token = this.getToken();
    if(!token) return true;

    const date = this.getTokenExpirationDate(token);
    if(date === undefined) return false;
    return !(date.valueOf() > new Date().valueOf());
  }

  login(email,password): Promise<string> {
    return this.http
      .post(`${this.url}/login`,
        JSON.stringify(
            {
                email: email,
                password: password
            }
        ),
        { headers: this.headers })
      .toPromise()
      .then(res => res.text());
  }

  signup(email,name,password): Promise<string> {
    return this.http
      .post(`${this.url}/register`,
        JSON.stringify(
            {
                email: email,
                name: name,
                password: password
            }
        ),
        { headers: this.headers })
      .toPromise()
      .then(res => res.text());
  }

}