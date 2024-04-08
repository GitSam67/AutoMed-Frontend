export class Medicine{
    [x:string]:any;
    constructor(
        public MedicineId: number,
        public Name: string,
        public UnitPrice: number,
        public ExpiryDate: Date,
        public BatchNumber: string,
        public Manufacturer: string,
        public Category: string
    ){};
}
