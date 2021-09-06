interface User {
  login:string,
  password:number,
  id?: number,
  tasks: number[],
  boards: number[]
}

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

interface Tokens {
  tokenId: number | string,
  userId: number | string
}
