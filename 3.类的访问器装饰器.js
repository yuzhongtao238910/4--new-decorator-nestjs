class Class {
    
    set x(args) {

    }
    
    get x() {
        return 2
    }
}


function logged(value, context) {
    console.log(value, "value")
    console.log(context, "context")
    if (context.kind === "setter" || context.kind ==="getter") {
        return function(...args) {
            console.log(`starting ${context.name} with arguments ${args.join(",")}`)
            const result = value.call(this, ...args)
            console.log(`ending ${context.name}`)
            return result
        }
    }
}
/*
{
  kind: 'setter',
  name: 'x',
  static: false,
  private: false,
}

{
  kind: 'getter',
  name: 'x',
  static: false,
  private: false,
}

*/



const class2 = new Class()

// 获取类原型上的get和set方法
let {set, get} = Object.getOwnPropertyDescriptor(Class.prototype, "x")

set = logged(set, {kind: "setter", name: "x"})

get = logged(get, {kind: "getter", name: "x"})

Object.defineProperty(Class.prototype, "x", {
    get, set
})

console.log(class2.x)

console.log(get, set, "get", "set")
class2.x = 1111


// export {}