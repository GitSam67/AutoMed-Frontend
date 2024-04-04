export class User{
    [x:string]:any;
    constructor(
        public CustomerId: number,
        public CustomerName: string,
        public Age: string,
        public Gender: string,
        public BloodGroup: string,
        public ContactNo: string,
        public Address: string,
        public Prescription: string,
        public Email: string,
    ){}
}

export class StoreOwner{
    constructor(
        public OwnerId: number,
        public Name: string,
        public Email: string,
        public BranchId: number
    ){}
}
