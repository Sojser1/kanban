import {Injectable} from '@angular/core';

interface Todo {
  id: number,
  title: string,
  dateCreate: number,
  dateExpire: number,
  whoCreate: number,
  whoVerified: number,
  whoTook: number
}

interface Board {
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

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  board: Board = {
    id: 1,
    title: 'Pizda Djigurda',
    list: {
      stCol: [{
        id: 1,
        title: 'Title Test',
        dateCreate: 1,
        dateExpire: 1,
        whoCreate: 1,
        whoVerified: 1,
        whoTook: 1
      }, {
        id: 2,
        title: 'Second Title to test',
        dateCreate: 2,
        dateExpire: 2,
        whoCreate: 2,
        whoVerified: 2,
        whoTook: 2
      }],
      ndCol: [],
      rdCol: [],
      thCol: [],
    },
    adminsId: [],
    usersId: []
  }


  constructor() {

  }
}
