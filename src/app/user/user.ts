export class User {

  constructor(public id: string,
              public mobile: string,
              public code: number,
              public addTime: string,
              public regTime: number,
              public token?: string,
              public addressDefault?: number,) {
  }

}

