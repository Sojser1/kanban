import {Injectable, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {tap} from "rxjs/operators"
import {Board} from "./board.service";
import {HttpClient} from "@angular/common/http";

export interface User {
  login:string,
  password:string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit{
  backUrl: string = 'https://kanban322.herokuapp.com'

  constructor(private http:HttpClient) {}


  ngOnInit(): void {

  }

  private token: string | null= ''

  login(user: User):Observable<{ accessToken:string, refreshToken:string }>{
    return this.http.post<{ accessToken:string, refreshToken:string }>(this.backUrl + '/auth/login',{"login":user.login,"password":user.password})
      .pipe(
        tap(
          ({accessToken})=> {
            localStorage.setItem('auth-token', accessToken)
            this.setToken(accessToken)
          }
        )
      )
  }

  setToken(token : string | null) {
    this.token = token
  }

  getToken() {
    return this.token
  }

  isAuth(): boolean {
      return !!this.token
  }

  logout() {
    this.setToken(null)
    localStorage.clear()
  }

  reg(user: User):Observable<{ accessToken:string, refreshToken:string }> {
    return this.http.post<{ accessToken:string, refreshToken:string }>(this.backUrl + '/auth/reg',{"login":user.login,"password":user.password})
  }
}
