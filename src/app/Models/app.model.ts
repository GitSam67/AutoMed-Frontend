export class Branch{
    [x:string]:any;
    constructor(
        public BranchId: number,
        public BranchName: string,
        public Address: string,
    ){};
}