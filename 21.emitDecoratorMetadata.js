"use strict";
/**
 * 在ts之中，emitDecoratorMetadata 生成元数据主要是有以下3种
 *
 * design: type  用于属性的类型的元数据
 * design: paramtypes 用于构建函数或者方法参数的类型的元数据
 * design: returntype 用于方法的返回类型元数据
 *


    在vscode之中，关于ts的处理分为：tsServer 和 tsCompiler

    语法检查使用的是tsSever

    编译使用的是 tsCompiler
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
require("reflect-metadata");
function classDecorator(target) {
}
function paramDecorator(target, propertyKey, index) {
}
function propDecorator(target, propertyKey) {
}
function methodDecorator(target, propertyKey, descript) {
}
var Example = /** @class */ (function () {
    function Example() {
    }
    Example.prototype.myMethod = function (a) {
        return "hello";
    };
    __decorate([
        propDecorator
    ], Example.prototype, "myProperty");
    __decorate([
        methodDecorator,
        __param(0, paramDecorator)
    ], Example.prototype, "myMethod");
    Example = __decorate([
        classDecorator
    ], Example);
    return Example;
}());
var propertyType = Reflect.getMetadata("desgin:type", Example.prototype, "myProperty");
