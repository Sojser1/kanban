import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

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
  id: number,
  _id?: number
  title: string,
  list: {
    toDo: Todo[],
    inWork: Todo[],
    finished: Todo[],
    verified: Todo[],
  },
  adminsId: number[],
  usersId: number[]
}




@Injectable({
  providedIn: 'root'
})
export class BoardService implements OnInit{

  //Пока урлы будут лежать тут, потом перенесем в окружение (мб)
  backUrl: string = 'https://kanban322.herokuapp.com'





  constructor(private http:HttpClient) {
  }

  ngOnInit(): void {

  }

  getBoard(id:string): Observable<{board:Board}> {
    return this.http.get<{board:Board}>(this.backUrl + '/boards/' + id)
  }

  updateBoard(board: Board):Observable<{board:Board}> {
   return this.http.put<{board:Board}>(this.backUrl + '/boards/' + board._id,board )
  }

  createBoard(title:string, adminsId: number[]): Observable<{board:Board}>{
    return this.http.post<{board:Board}>(this.backUrl + '/boards/', {title,adminsId})
  }

  deleleBoard(id:number){
    return this.http.delete(this.backUrl + '/boards/' + id)
  }
}
