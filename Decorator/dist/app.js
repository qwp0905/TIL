"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function Electronic(brand) {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.auto = true;
                this.brand = brand;
            }
        };
    };
}
function Timer(time) {
    return function (target, property, descripter) {
        let origin_method = descripter.value;
        descripter.value = function (...arg) {
            const start = new Date().getTime();
            setTimeout(() => {
                origin_method.apply(this, ...arg);
                const end = new Date().getTime();
                console.log(end - start, 'ms');
            }, time);
        };
    };
}
let Car = class Car {
    constructor(brand, wheel) {
        this.brand = brand;
        this.wheel = wheel;
    }
    ride() {
        console.log('singsing');
        console.log(this.auto);
    }
};
__decorate([
    Timer(1000),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Car.prototype, "ride", null);
Car = __decorate([
    Electronic('hyundai'),
    __metadata("design:paramtypes", [String, Number])
], Car);
const bentz = new Car('bentz', 4);
