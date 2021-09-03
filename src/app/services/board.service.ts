import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Params} from "@angular/router";

export interface Todo {
  id: number,
  title: string,
  dateCreate: number,
  dateExpire: number,
  whoCreate: number,
  whoVerified: number,
  whoTook: number
}

export interface Board {
  id?: number,
  title: string,
  list: {
    stCol: Todo[],
    ndCol: Todo[],
    rdCol: Todo[],
    thCol: Todo[],
  },
  adminsId: number[],
  usersId: number[]
}

export interface PostPayload {
  id?: number,
  title?: string,
  list?: {
    stCol: Todo[],
    ndCol: Todo[],
    rdCol: Todo[],
    thCol: Todo[],
  },
  adminsId?: number[],
  usersId?: number[]
}

@Injectable({
  providedIn: 'root'
})
export class BoardService implements OnInit{

  //Пока урлы будут лежать тут, потом перенесем в окружение (мб)
  backUrl: string = 'https://kanban322.herokuapp.com'
  boardUrl: string = '612f67b426a1405dbdd4a265'





  constructor(private http:HttpClient) {
    this.getBoard(this.boardUrl)
  }

  ngOnInit(): void {

  }

  getBoard(id:string) {
    return this.http.get<{board:Board}>(this.backUrl + '/boards/' + id)
  }

  updateBoard(payload:PostPayload, id:string) {
   return this.http.put(this.backUrl + 'boards/' + id,payload )

  }

  createBoard(title:string, adminsId: number[]){
    return this.http.post<{board:Board}>(this.backUrl + 'boards/', {title,adminsId})
  }

  deleleBoard(id:number){
    return this.http.delete(this.backUrl + 'boards/' + id)
  }
}
