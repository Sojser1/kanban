import { Injectable } from '@angular/core';

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




  constructor() { }
}
