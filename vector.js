"use strict";
exports.__esModule = true;
exports.Vector = void 0;
var Vector = /** @class */ (function () {
    function Vector(n, k) {
        this.elements = [];
        for (var i = 0; i < n; i++) {
            this.elements.push(Math.round(Math.random() * k));
        }
        ;
    }
    ;
    Vector.prototype.print = function () {
        console.log(this.elements);
    };
    ;
    Vector.prototype.getElements = function () {
        return this.elements;
    };
    ;
    Vector.prototype.add = function (v1) {
        var vectorSum = new Vector(v1.elements.length, 0);
        if (v1.elements.length == this.elements.length) {
            for (var item in v1.elements) {
                vectorSum.elements[item] = (v1.elements[item] + this.elements[item]);
            }
            ;
        }
        else {
            vectorSum.elements = [111111, 34404, 5123, 111111];
        }
        ;
        return vectorSum;
    };
    ;
    Vector.prototype.subs = function (v1) {
        var vectorSubs = new Vector(v1.elements.length, 0);
        if (v1.elements.length == this.elements.length) {
            for (var item in v1.elements) {
                vectorSubs.elements[item] = (v1.elements[item] - this.elements[item]);
            }
            ;
        }
        else {
            vectorSubs.elements = [111111, 34404, 5123, 111111];
        }
        return vectorSubs;
    };
    ;
    Vector.prototype.mult = function (v1) {
        var vectorMult = new Vector(v1.elements.length, 0);
        if (v1.elements.length == this.elements.length) {
            for (var item in v1.elements) {
                vectorMult.elements[item] = (v1.elements[item] * this.elements[item]);
            }
            ;
        }
        else {
            vectorMult.elements = [111111, 34404, 5123, 111111];
        }
        return vectorMult;
    };
    ;
    Vector.prototype.multNumber = function (n) {
        var vectorPorNum = new Vector(this.elements.length, 0);
        for (var item in this.elements) {
            vectorPorNum.elements[item] = n * this.elements[item];
        }
        ;
        return vectorPorNum;
    };
    ;
    return Vector;
}());
exports.Vector = Vector;
;
