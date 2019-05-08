"use strict";
exports.__esModule = true;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('X is ' + this.x + " , " + 'Y is ' + this.y);
    };
    Point.prototype.getDistance = function (another) {
        //..........
    };
    return Point;
}());
exports.Point = Point;
var point = new Point(1, 2); //memory allocation
point.draw();
//properties
//set method Set (name of the property) (values){this.x=values}
//get method get (name of property){return this.x}
//getter and setter for properties
