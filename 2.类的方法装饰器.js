// 这里是ts编译为es5之后的结果是什么哈


function logged(value, context) {
    let newSum = null
    console.log(context, "context")
    console.log(value, "value")
    setTimeout(() => {
        console.log(newSum === Person.prototype.sum)
    }, 2000)
    if (context.kind === 'method') {
        
        // 说明这是一个类的方法装饰器
        newSum= function (...args) {
            console.log(`starting ${context.name} with arguments ${args.join(",")}`)
            const result = value.call(this, ...args)
            console.log(`ending ${context.name}`)
            return result
        }
        return newSum
    }
}


class Person {
    sum(a, b) {
        return a + b
    }
}
// logged 如果是返回了函数就用新函数，否则就还是用之前的
Person.prototype.sum = logged(Person.prototype.sum, {
    kind: "method",
    name: "sum"
}) ?? Person.prototype.sum



let p = new Person()
p.sum(1, 2)