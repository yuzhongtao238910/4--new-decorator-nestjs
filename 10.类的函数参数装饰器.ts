


// function logged(target, propertyKey, parameterIndex) {
//     console.log(target);  // 类的原型对象
//     console.log(propertyKey);  // 方法名称
//     console.log(parameterIndex);  // 参数索引
// }

// class Person {
//     // @ts-ignore
//     method(@logged name: string) {
//         return name + "world"
//     }
// }
// const p = new Person()

// p.method("Apple")



// function logged(target: Object, propertyKey: string | symbol, parameterIndex: number): void {
//     console.log(`Parameter at position ${parameterIndex} of method ${String(propertyKey)} is decorated.`);
// }

// class Person {
//     method(@logged name: string, @logged age: number) {
//         return `${name} is ${age} years old.`;
//     }
// }

// const person = new Person();
// console.log(person.method("John", 30));  // 输出 "John is 30 years old."



// 发现目前是还没有类的参数的装饰器哈


export {}