export class User{
    [x:string]:any;
    constructor(
        public CustomerName: string,
        public Age: string,
        public Gender: string,
        public BloodGroup: string,
        public ContactNo: string,
        public Address: string,
        public Prescription: string,
        public Email: string,
        public Password: string
    ){}
}

export class StoreOwner{
    constructor(
        public Name: string,
        public Email: string,
        public Password: string,
        public BranchId: string
    ){}
}