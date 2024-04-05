export class Medicine{
    [x:string]:any;
    constructor(
        public MedicineId: number,
        public Name: string,
        public Manufacturer: string,
        public UnitPrice: number,
        public BatchNumber: string,
        public ExpiryDate: Date,
        public Category: string
    ){};
}
