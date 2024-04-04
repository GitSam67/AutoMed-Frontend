export class Medicine{
    [x:string]:any;
    constructor(
        public MedicineId: string,
        public Name: string,
        public Manufacturer: string,
        public UnitPrice: number,
        public BatchNumber: number,
        public ExpiryDate: Date,
        public Category: string
    ){};
}