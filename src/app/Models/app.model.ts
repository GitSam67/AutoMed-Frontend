export class Branch{
    [x:string]:any;
    constructor(
        public BranchId: number,
        public BranchName: string,
        public Address: string,
    ){};
}

export class Inventory{
    [x:string]:any;
    constructor(
        public InventoryId: number,
        public MedicineId: number,
        public Quantity: number,
        public BranchId: number
    ){};
}
