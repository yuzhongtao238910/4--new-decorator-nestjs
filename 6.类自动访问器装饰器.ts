// 类自动的访问器装饰器是一种新的类的元素类型

// 他在类的字段前添加accessor关键字

// 自动访问器自动为字段创建setter和getter方法，并且将默认值保存在一个私有的槽之中


/*
{ get: [Function: get x], set: [Function: set x] }
{
  kind: 'accessor',
  name: 'x',
  static: false,
  private: false,
  access: { has: [Function: has], get: [Function: get], set: [Function: set] },
  metadata: undefined,
  addInitializer: [Function (anonymous)]
}
*/
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


class Apple {
    @logged
    accessor x = 1
}

const p = new Apple()

console.log(p.x)

p.x = 1

export {}