import { Medicine } from "./app.medicine.model";

export class Order{
    [x:string]:any;
    constructor(
        public OrderId: number,
        public CustomerId: number,
        public Medicines: Medicine[],
        public PurchaseTime: Date,
        public TotalBill: number,
        public BranchId: number
    ){};
}