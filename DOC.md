# 如何使用stage3的装饰器选项
- 下面两个是一对，需要关闭是false
- 关闭："experimentalDecorators": true, // 支持stage0,1,2的写法 stage3是有变化了
- 关闭："emitDecoratorMetadata": true   

# typescipt5.3就是新写法了
- 老的类装饰器一个参数，新的2个参数

## 1.intelliSense
- 这个指的是智能代码补全的功能
- vscode还可以提供错误检查

## 2.tsServer
- vscode内部使用的是tsServer服务器来进行代码检查
- tsServer内部会调用sdk进行检查，
- 那这个sdk的版本是可以设置的

## 搜索tsdk 在settings里面

## 如何切换装饰器的版本 typescript的版本需要是5.x
- 使用老版本：打开
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
- 使用新版本：关闭
    "experimentalDecorators": false,
    "emitDecoratorMetadata": false,

## 看vscode右下角是哪个ts版本的解析器就行了
- 一般新版本是兼容老版本的写法的

## 如果不指定tsdk的话，vscode内置的是看自己的电脑就行了哈