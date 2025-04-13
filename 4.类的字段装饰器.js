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

const newXFunc = logged(undefined, {
    kind: "field",
    name: "x"
})

class Class {
    
    x = newXFunc.call(this, "hello")
}




const class3 = new Class()
console.log(class3.x)

// export {}