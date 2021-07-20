import { Matrix } from "./matrix";

let m1:Matrix = new Matrix(3,3,3);
let m2:Matrix = new Matrix(3,3,2);
let num:number = Math.round(Math.random() * 4);

/********FORMATEADO DE LAS MATRICES INICIALES EN PANTALLA********/
console.log("\nMatrices iniciales:");
let tabDist:number = (m1.getElements()[0].getElements().length * 3 + 4);
let tabDistA:string = '';
for (let i:number = 0; i < tabDist-2; i++)
{
    tabDistA += (' ');
};

console.log('[m1]', tabDistA, '[m2]');
for (let itemM in m1.getElements())
{
    console.log(m1.getElements()[itemM].getElements(), '    ', m2.getElements()[itemM].getElements());
};
/******************************************************/

/********FORMATEADO DE LAS MATRICES RESULTADO EN PANTALLA********/
console.log('\nMatrices resultado:');
let tabDistB:string = '';
for (let i:number = 0; i < tabDist-5; i++)
{
    tabDistB += (' ');
};
console.log(`[mSuma] ${tabDistB} [mMult] ${tabDistB} [m1*(${num}o${num-1})]`);
for (let itemM in m1.getElements())
{
console.log(m1.add(m2).getElements()[itemM].getElements(), '    ', m1.mult(m2).getElements()[itemM].getElements(), '    ', m1.multSpecial(num).getElements()[itemM].getElements());
};
console.log();