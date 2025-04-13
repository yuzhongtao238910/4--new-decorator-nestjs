// 类自动的访问器装饰器是一种新的类的元素类型

// 他在类的字段前添加accessor关键字

// 自动访问器自动为字段创建setter和getter方法，并且将默认值保存在一个私有的槽之中


// class Apple {
//     accessor x = 1
// }

function logged(value, context) {
    console.log(value) // { get, set}
    console.log(context)
    if (context.kind === 'accessor') {
        const { get, set} = value
        return {
            get() {
                console.log(`getting ${context.name}`)

                return get.call(this)
            },
            set(val) {
                console.log(`setting ${context.name} ${val}`)
                return set.call(this, val)
            },
            // 最开始实例化的时候会走init
            init(initialValue) {
                console.log(`initialValue ${context.name} ${initialValue}`)
                return initialValue + 100
            }
        }
    }
}

// 下方是编译后的结果
class Apple {
    // 表示这个是一个私有属性，并且会自动添加get set
    #x = initializeX.call(this, 1)

    get x() {
        return this.#x
    }

    set x(val) {
        this.#x = val
    }
}
let {set: oldSet, get: oldGet} = Object.getOwnPropertyDescriptor(Apple.prototype, "x")


const {set: newSet = oldSet, get: newGet = oldGet, init: initializeX = (val) =>val} = logged({set: oldSet, get: oldGet}, {
    kind: "accessor",
    name: "x"
})

Object.defineProperty(Apple.prototype, 'x', {
    set: newSet,
    get: newGet
})

const apple = new Apple()
console.log(apple.x)