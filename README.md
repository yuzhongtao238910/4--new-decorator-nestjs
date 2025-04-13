# provider
- 提供者是nestjs之中的一个基本概念，许多的基本的nest类都可以作为提供者-服务，仓库，工厂，助手等等
- 提供者的理念是他可以作为依赖注入，这意味着对象之中可以相互创建各种关系，并且将这些对象连接起来的功能可以交给nestjs来处理的
- 控制器会将更加复杂的任务委托给提供者
- solid原则

# 新版本的装饰器 (没有还没有参数装饰器)
- stage3 装饰器是符合tc39提案的新一代的装饰器的语法，这些装饰器可以应用于类，方法，访问器，字段
- 参数的含义
- 装饰器 这次全部都统一了，之前的参数都是不一样的
    - value     被装饰的值，对于类的字段为undefined
    - context   一个包含有关被装饰值信息的上下文对象
        - kind 被装饰的值的类型：class method getter setter field accessor
        - name
        - access 
        - static 是否是静态的
        - private 
        - addInitializer 

# emitDecoratorMetadata
- 在ts之中，emitDecoratorMetadata 生成的元数据主要有以下3种
- design:type 用于属性的类型的元数据
- design:paramtypes 用于构造函数或者方法参数的类型的元数据
- design:returntype 用于方法的返回类型元数据