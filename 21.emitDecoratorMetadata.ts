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


import "reflect-metadata"

function classDecorator(target) {

}
function paramDecorator(target, propertyKey, index) {

}
function propDecorator(target, propertyKey) {

}

function methodDecorator(target, propertyKey, descript) {

}

@classDecorator
class Example {

    @propDecorator
    myProperty: number

    constructor() {

    }

    @methodDecorator
    myMethod(@paramDecorator a: string, @paramDecorator b: string): string {
        return "hello"
    }
}


const propertyType = Reflect.getMetadata("design:type", Example.prototype, "myProperty")
// 获取属性类型
// propertyType [Function: String]
// propertyType [Function: Number]
console.log("propertyType", propertyType)


const paramTypes = Reflect.getMetadata("design:paramtypes", Example.prototype, "myMethod")
// paramTypes [ [Function: String] ]
// paramTypes [ [Function: String], [Function: String] ]
console.log("paramTypes", paramTypes)

const returnType = Reflect.getMetadata("design:returntype", Example.prototype, "myMethod")
// returnType [Function: String]
console.log("returnType", returnType)

// Boolean Function Number 