export class Customer{
    [x:string]:any;
    constructor(
        public CustomerId: number,
        public CustomerName: string | any,
        public Age: string,
        public Gender: string,
        public BloodGroup: string,
        public ContactNo: string,
        public Address: string,
        public Prescription: string,
        public Email: string | any,
    ){}
}

export class StoreOwner{
    constructor(
        public OwnerId: number,
        public OwnerName: string,
        public Email: string,
        public BranchId: number
    ){}
}
