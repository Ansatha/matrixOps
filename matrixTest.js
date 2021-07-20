"use strict";
exports.__esModule = true;
var matrix_1 = require("./matrix");
var m1 = new matrix_1.Matrix(3, 3, 3);
var m2 = new matrix_1.Matrix(3, 3, 2);
var num = Math.round(Math.random() * 4);
/********FORMATEADO DE LAS MATRICES INICIALES EN PANTALLA********/
console.log("\nMatrices iniciales:");
var tabDist = (m1.getElements()[0].getElements().length * 3 + 4);
var tabDistA = '';
for (var i = 0; i < tabDist - 2; i++) {
    tabDistA += (' ');
}
;
console.log('[m1]', tabDistA, '[m2]');
for (var itemM in m1.getElements()) {
    console.log(m1.getElements()[itemM].getElements(), '    ', m2.getElements()[itemM].getElements());
}
;
/******************************************************/
/********FORMATEADO DE LAS MATRICES RESULTADO EN PANTALLA********/
console.log('\nMatrices resultado:');
var tabDistB = '';
for (var i = 0; i < tabDist - 5; i++) {
    tabDistB += (' ');
}
;
console.log("[mSuma] " + tabDistB + " [mMult] " + tabDistB + " [m1*(" + num + "o" + (num - 1) + ")]");
for (var itemM in m1.getElements()) {
    console.log(m1.add(m2).getElements()[itemM].getElements(), '    ', m1.mult(m2).getElements()[itemM].getElements(), '    ', m1.multSpecial(num).getElements()[itemM].getElements());
}
;
console.log();
