import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";

export interface colorOption {
  title:string,
  isActive: boolean
}

export interface optionColors {
  [index:string]: colorOption

  red: colorOption,
  green: colorOption,
  blue: colorOption,
  white: colorOption,
  yellow: colorOption
}

export interface Todo {
  id: number,
  title: string,
  dateCreate: number,
  dateExpire: number,
  whoCreate: number,
  whoVerified: number,
  whoTook: number,
  optionColor?:optionColors
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
  private backUrl: string = 'https://kanban322.herokuapp.com'

  board!: Board



  obsBoard: BehaviorSubject<Board | null> = new BehaviorSubject<Board|null>(this.board)

  constructor(private http:HttpClient) {
  }

  ngOnInit(): void {

  }

  getBoard(id:string): Observable<{board:Board}> {
    return this.http.get<{board:Board}>(this.backUrl + '/boards/' + id)
  }

  updateBoard():Observable<any> {
      return this.http.put<{board:Board}>(this.backUrl + '/boards/' + this.board._id, {board:this.board} )
  }

  createBoard(title:string, adminsId: number[]): Observable<{board:Board}>{
    return this.http.post<{board:Board}>(this.backUrl + '/boards/', {title,adminsId})
  }

  deleleBoard(id:number){
    return this.http.delete(this.backUrl + '/boards/' + id)
  }

  deleteTodo(id:number):void{
    const idx:number = this.board.list.toDo.findIndex(item =>{
      return item.id === id
    })
    if(idx >= 0){
      this.board.list.toDo.splice(idx, 1)
      this.obsBoard.next(this.board)
    }
  }


}
