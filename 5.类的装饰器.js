/*
[Function: Class]
{
  kind: 'class',
  name: 'Class',
  metadata: undefined,
  addInitializer: [Function (anonymous)]
}
*/
function logged(value, context) {
    console.log(value) // 装饰器修饰字段的时候 value是undefined
    console.log(context)
    if (context.kind === 'class') {
        return class extends value {
            constructor(...args) {
                super(...args)
                console.log(`constructor an instance of ${context.name} width arguments ${args.join(',')}`)
            }
        }
    }
}

class  Class {
    a
    constructor(a) {
        this.a = a
    }
}


let NewClass = logged(Class, {
    kind: "class",
    name: "Class"
})

new NewClass(1)