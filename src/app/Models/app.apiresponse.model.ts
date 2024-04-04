export class APIResponse<T> {
    constructor(
      public Message:string,
      public StatusCode: number,
      public records: Array<T>,
      public record: T
    ){}
  }