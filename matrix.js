"use strict";
exports.__esModule = true;
exports.Matrix = void 0;
var vector_1 = require("./vector");
var Matrix = /** @class */ (function () {
    function Matrix(n, m, k) {
        this.elements = [];
        for (var files = 0; files < n; files++) {
            this.elements.push(new vector_1.Vector(m, k));
        }
        ;
    }
    ;
    Matrix.prototype.print = function () {
        console.log(this.elements);
    };
    ;
    Matrix.prototype.getElements = function () {
        return this.elements;
    };
    ;
    Matrix.prototype.add = function (m1) {
        var matrixAdd = new Matrix(1, 1, 0);
        for (var item in m1.elements) {
            matrixAdd.elements[item] = (m1.elements[item].add(this.elements[item]));
        }
        ;
        return matrixAdd;
    };
    ;
    Matrix.prototype.subs = function (m1) {
        var matrixAdd = new Matrix(1, 1, 0);
        for (var item in m1.elements) {
            matrixAdd.elements[item] = (m1.elements[item].subs(this.elements[item]));
        }
        ;
        return matrixAdd;
    };
    ;
    Matrix.prototype.mult = function (m1) {
        var matrixMult = new Matrix(1, 1, 0);
        for (var item in m1.elements) {
            matrixMult.elements[item] = (m1.elements[item].mult(this.elements[item]));
        }
        ;
        return matrixMult;
    };
    ;
    Matrix.prototype.multSpecial = function (n) {
        var matrixMultNum = new Matrix(this.elements.length, this.elements[0].getElements().length, 0);
        for (var itemM in this.elements) {
            for (var itemV in this.elements[itemM].getElements()) {
                var nMult = n;
                if (this.elements[itemM].getElements()[itemV] % 2 != 0) {
                    nMult = n - 1;
                }
                matrixMultNum.elements[itemM].getElements()[itemV] = this.elements[itemM].getElements()[itemV] * nMult;
            }
            ;
        }
        ;
        return matrixMultNum;
    };
    ;
    return Matrix;
}());
exports.Matrix = Matrix;
;
