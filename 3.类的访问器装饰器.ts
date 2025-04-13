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

class Class {
    @logged
    set x(args) {

    }
    @logged
    get x() {
        return 2
    }
}

const class2 = new Class()

console.log(class2.x)

class2.x = 1111


export {}