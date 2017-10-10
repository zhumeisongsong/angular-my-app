export class User {

  constructor(
              public mobile: string,
              public code: number,
              public addTime: string,
              public regTime: number,
              public id?: string,
              public token?: string,
              public addressDefault?: number,) {
  }

}

