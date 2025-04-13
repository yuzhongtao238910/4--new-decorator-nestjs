type ClassMethodDecorator = (value: Function, context: {
    kind: "method" // class method getter setter field accessor(新语法，还没学哈)
    name: string // 表示被装饰的值的名称
    static: boolean // 表示值是否是静态的属性/方法
    private: boolean // 值是否是私有的属性

}) => Function | void


function logged(value, context) {
    console.log(context, "context")
    console.log(value, "value")
    setTimeout(() => {
        // console.log(value === Person.prototype.sum)
    }, 2000)
    if (context.kind === 'method') {
        // 说明这是一个类的方法装饰器
        return function (...args) {
            console.log(`starting ${context.name} with arguments ${args.join(",")}`)
            const result = value.call(this, ...args)
            console.log(`ending ${context.name}`)
            return result
        }
    }
}

// 给方法加上private里面的context一直是false

class Person {
    @logged
    private sum(a, b) {
        return a + b
    }
    public getSum(a, b) {
        return this.sum(a, b)
    }
}
const p = new Person()
const res = p.getSum(1, 2)
console.log(res, "result")