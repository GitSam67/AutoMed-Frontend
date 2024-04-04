export class AppUser{
  constructor(
      public Name: string,
      public Email: string,
      public Password: string,
      public ConfirmPassword: string,
      public BranchName: string
  ){}
}
