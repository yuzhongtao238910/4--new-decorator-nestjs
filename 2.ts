import "reflect-metadata"
// 新版本的装饰器
function logNew(value, context) {
    console.log(value, "value")
    console.log(context, "context")
}
/*
{
  kind: 'class', 类装饰器
  name: 'log', 名字
  metadata: undefined,
  addInitializer: [Function (anonymous)]
} context
*/


@logNew
class Log {
    // @Reflect.metadata("key", "value")
    getName() {

    }
}

export {}