export class AppUser{
  constructor(
      public Name: string,
      public Email: string,
      public Role: string,
      public Password: string,
      public ConfirmPassword: string
  ){}
}

export class LoginUser{
  constructor(
      public Email: string,
      public Password: string,
  ){}
}
