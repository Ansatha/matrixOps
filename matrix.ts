import { Vector } from "./vector"

export class Matrix
{
    private elements:Vector[];
    constructor(n:number, m:number, k:number)
    {   
        this.elements = []
        for(let files:number = 0; files < n; files++)
        {
            this.elements.push(new Vector(m, k));
        };
    };

    public print():void
    {
        console.log(this.elements);
    };

    public getElements():Vector[]
    {
        return this.elements;
    };

    public add(m1:Matrix):Matrix
    {
        let matrixAdd:Matrix = new Matrix(1, 1, 0);
        for (let item in m1.elements)
        {
            matrixAdd.elements[item] = (m1.elements[item].add(this.elements[item]))
        };
        return matrixAdd;
    };

    public subs(m1:Matrix):Matrix
    {
        let matrixAdd:Matrix = new Matrix(1, 1, 0);
        for (let item in m1.elements)
        {
            matrixAdd.elements[item] = (m1.elements[item].subs(this.elements[item]))
        };
        return matrixAdd;
    };

    public mult(m1:Matrix):Matrix
    {
        let matrixMult:Matrix = new Matrix(1, 1, 0);
        for (let item in m1.elements)
        {
            matrixMult.elements[item] = (m1.elements[item].mult(this.elements[item]))
        };
        return matrixMult;
    };
    public multSpecial(n:number):Matrix
    {
        let matrixMultNum:Matrix = new Matrix(this.elements.length, this.elements[0].getElements().length, 0);
        for (let itemM in this.elements)
        {
            for (let itemV in this.elements[itemM].getElements())
            {
                let nMult:number = n;
                if(this.elements[itemM].getElements()[itemV] % 2 != 0)
                {
                    nMult = n - 1;
                }
                matrixMultNum.elements[itemM].getElements()[itemV] = this.elements[itemM].getElements()[itemV] * nMult;
            };
        }; 
        return matrixMultNum;
    };
};