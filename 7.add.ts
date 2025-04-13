/**
 * addInitializer
 * 这个是一个允许在类或者类成员完成定义之后运行额外的初始化的逻辑的函数
 */

function withLogging(value, context) {
    console.log(context, "777")
    if (context.kind === 'class') {
        // addInitializer
        context.addInitializer(function () {
            console.log(`addInitializer-` + context.name)
        })
    }
}

@withLogging
class Myclass {
    
}

new Myclass()

setTimeout(() => {
    new Myclass()
}, 1000)

export {}