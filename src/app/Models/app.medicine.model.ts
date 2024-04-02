export class Medicine{
    [x:string]:any;
    constructor(
        public MedicineId: string,
        public MedicineName: string,
        public Manufacturer: string,
        public UnitPrice: number
    ){};
}