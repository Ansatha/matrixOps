export class Vector
{
    private elements:number[];

    constructor(n:number, k:number)
    {
        this.elements = [];  
        
        for(let i = 0; i < n; i++)
        {
            this.elements.push(Math.round(Math.random() * k));
        };

    };

    public print():void
    {
        console.log(this.elements);
    };

    public getElements():number[]
    {
        return this.elements;
    };

    public add(v1:Vector):Vector
    {
        let vectorSum:Vector = new Vector (v1.elements.length, 0);
        if (v1.elements.length == this.elements.length)
        {
            for(let item in v1.elements)
            {   
                vectorSum.elements[item] = (v1.elements[item] + this.elements[item]);
            };
        }
        else
        {
            vectorSum.elements = [111111,34404,5123,111111];
        };
        return vectorSum;
    };
    
    public subs(v1:Vector):Vector
    {
        let vectorSubs:Vector = new Vector(v1.elements.length, 0);
        if (v1.elements.length == this.elements.length)
        {
            for(let item in v1.elements)
            {
                vectorSubs.elements[item] = (v1.elements[item] - this.elements[item]);
            } ;
        }
        else
        {
            vectorSubs.elements = [111111,34404,5123,111111];
        }
        return vectorSubs;
    };

    public mult(v1:Vector):Vector
    {
        let vectorMult:Vector = new Vector(v1.elements.length, 0);
        if (v1.elements.length == this.elements.length)
        {
            for(let item in v1.elements)
            {
                vectorMult.elements[item] = (v1.elements[item] * this.elements[item]);
            };
        }
        else
        {
            vectorMult.elements = [111111,34404,5123,111111];
        }
        return vectorMult;
    };
    
    public multNumber(n:number):Vector
    {
        let vectorPorNum:Vector = new Vector(this.elements.length, 0);
        for (let item in this.elements)
        {
            vectorPorNum.elements[item] = n * this.elements[item];
        };
        return vectorPorNum;
    };
};