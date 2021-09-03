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
        title: 'Ершкв Title to test',
        dateCreate: 2,
        dateExpire: 2,
        whoCreate: 2,
        whoVerified: 2,
        whoTook: 2
      }, {
        id: 3,
        title: 'Third Title to test',
        dateCreate: 3,
        dateExpire: 3,
        whoCreate: 3,
        whoVerified: 3,
        whoTook: 3
      }, {
        id: 4,
        title: 'Fourth Title to test',
        dateCreate: 4,
        dateExpire: 4,
        whoCreate: 4,
        whoVerified: 4,
        whoTook: 4
      }],
      ndCol: [{
        id: 1,
        title: 'Title Test',
        dateCreate: 1,
        dateExpire: 1,
        whoCreate: 1,
        whoVerified: 1,
        whoTook: 1
      }, {
        id: 2,
        title: 'Ершкв Title to test',
        dateCreate: 2,
        dateExpire: 2,
        whoCreate: 2,
        whoVerified: 2,
        whoTook: 2
      }, {
        id: 3,
        title: 'Third Title to test',
        dateCreate: 3,
        dateExpire: 3,
        whoCreate: 3,
        whoVerified: 3,
        whoTook: 3
      },],
      rdCol: [{
        id: 1,
        title: 'Title Test',
        dateCreate: 1,
        dateExpire: 1,
        whoCreate: 1,
        whoVerified: 1,
        whoTook: 1
      }, {
        id: 2,
        title: 'Ершкв Title to test',
        dateCreate: 2,
        dateExpire: 2,
        whoCreate: 2,
        whoVerified: 2,
        whoTook: 2
      },],
      thCol: [{
        id: 1,
        title: 'Title Test',
        dateCreate: 1,
        dateExpire: 1,
        whoCreate: 1,
        whoVerified: 1,
        whoTook: 1
      }, {
        id: 2,
        title: 'Ершкв Title to test',
        dateCreate: 2,
        dateExpire: 2,
        whoCreate: 2,
        whoVerified: 2,
        whoTook: 2
      },],
    },
    adminsId: [],
    usersId: []
  }


  constructor() {

  }
}
