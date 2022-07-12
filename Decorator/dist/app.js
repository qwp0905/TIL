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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
const string = () => {
    return function (target, property, descriptor) {
        Object.getOwnPropertyDescriptors(target[property]).name.enumerable = true;
        console.log(Object.getOwnPropertyDescriptors(target[property]));
        return {
            value: property
        };
    };
};
// function Timer(time: number) {
//   return function (target: any, property: any, descripter: any) {
//     let origin_method = descripter.value
//     descripter.value = function (...arg: any[]) {
//       const start = new Date().getTime()
//       setTimeout(() => {
//         origin_method.apply(this, ...arg)
//         const end = new Date().getTime()
//         console.log(end - start, 'ms')
//       }, time)
//     }
//   }
// }
let Car = class Car {
    constructor(brand, wheel) {
        this.brand = brand;
        this.wheel = wheel;
    }
    // @Timer(1000)
    ride(a) {
        console.log('singsing');
    }
};
__decorate([
    __param(0, string()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Car.prototype, "ride", null);
Car = __decorate([
    Electronic('hyundai'),
    __metadata("design:paramtypes", [String, Number])
], Car);
const bentz = new Car('bentz', 4);
bentz.ride('123123');
