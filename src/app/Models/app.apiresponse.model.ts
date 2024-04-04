export class APIResponse<T> {
    constructor(
      public Message:string,
      public StatusCode: number,
      public Records: Array<T>,
      public Record: T
    ){}
  }


  export class SecurityResponse {
    constructor(
      public Message:string,
      public Token:string,
      public Role:string,
      public IsLoggedIn:boolean
    ){}
  }
