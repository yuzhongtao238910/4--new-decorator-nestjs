function logged(value, context) {
    console.log(value) // 装饰器修饰字段的时候 value是undefined
    console.log(context)
    if (context.kind === 'field') {
        // 这里就是字段=装饰器
        return function (initialValue) {
            console.log(`initialValue ${context.name} with value ${initialValue}`)
            return initialValue + "world"
        }
    }
}

class Class {
    @logged
    static x: string = "hello"
}

const class3 = new Class()
console.log(Class.x)

export {}