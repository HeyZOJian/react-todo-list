# Redux入门笔记

[TOC]

## 一、干什么用的？

集中管理React中的状态state，使state的变化变得可预测。



## 二、怎么管理的？

### 1. 单一数据源

整个应用只维护一个`state`，这个`state`被保存在`object tree(不清楚)`，这个`object tree`只存在于一个唯一的`store`中。

这样state就变得集中化，易于管理操作。

### 2. State是只读的

唯一改变`state`的方法就是触发`action`（一个用于描述已发生事件的对象），这样所有的**修改意图**都被集中到了`action`中。

`state`的值通过`component`的`props`传进去。



### 3. 使用纯函数来修改

为了描述`action`如何修改`state`，就需要编写`reducer`。

`reducer`是一些纯函数，接受一个`先前的state`和`action`，返回一个`新的state`。

具体操作`state`的逻辑写在`reducer`中



## 三、三大概念（Action，Reducer，Store）与数据流

### 1. Action

1. 定义

   把数据从应用传到store的有效载荷，是store数据的唯一来源。一般通过store.dispatch()将action传到store。

2. 格式

   ```javascript
   {
       type: 'ADD_TODO', // 必要属性
       text: 'eat dinner'
   }
   ```

3. 用法（同步）

   1. 写一个action创建函数，传进dispatch中

      ```javascript
      function addTodo(text){
          return {
              type: 'ADD_TODO',
              text
          }
      }
      
      dispatch(addTodo(text))
      ```

      

   2. 写一个被绑定的action创建函数来自动dispatch

      ```javascript
      const boundAddTodo = (text) = > dispatch(addTodo(text))
      
      boundAddTodo(text)
      ```

      

4. tips

   1. 尽量减少在action中传递数据
   2. 将type定义成字符串常量
   3. 应用规模大时，使用单独的模块存放action



### 2. Reducer

1. 定义

   action只是描述**有事情发生了**，并没有指明如何更新state，而这正是reducer要做的事。

   reducer是一个纯函数：接收旧的state和action，返回新的state。

2. 格式

   1. ```javascript
      const initialState = {
          todos:[],
          visibilityFilter: 'SHOW_ALL'
      }
      
      function todoApp(state = initialState, action){ // 这里使用了ES6的参数默认值的语法
          switch(action.type){
              case 'ADD_TODO':
                  return Object.assign({},state,{
                      todos:[
                          ...state.todos,
                          {
                              text: action.text,
                              completed: false
                          }
                      ]
                  })
              default:
              	return state
          }
      }
      ```

      

3. 拆分（组合）

   当reducer的case比较多时，可以对reducer进行拆分

   ```javascript
   // 拆成多个后，每个reducer只负责管理全局state中他负责的一部分
   // 每个reducer参数不同，分别对应他们管理的那部分state数据
   // state的参数初始化只会第一次执行时初始化，后面每次执行reducer时都不会初始化，而是当前的state值
   function visibilityFilter(state = 'SHOW_ALL', action){
       switch(action.type){
           case 'SET_VISIBILITY_FILTER':
           	return action.filter
           default:
           	return state
       }
   }
   
   function todos(state = [], action){
       switch(action.type){
           case 'ADD_TODO':
               return [
                   ...state,
                   {
   
                       text: action.text,
                       completed: false
                   }
               ]
           case ...
       }
   }
   
   const todoApp = combineReducers({
         visibilityFilter,
         todos
   })
   // 上面combineReducers等价于            
   // function todoApp(state = {}, action){
   //    return {
   //        visibilityFilter:visibilityFilter(state.visibilityFilter, action),
   //        todos:todos(state.todos, action)
   //   }
   // }
        
   export default todoApp
   ```

   

4. tips

   1. 写代码前提前理清楚state这个对象的结构，尽量最简化
   2. state的结构尽量不要嵌套，想象成数据库，利用ID作为每个数据的主键，通过ID相互引用数据
   3. reducer中不要修改传入的参数
   4. reducer中不要执行有副作用的操作
   5. reducer中不要调非纯函数，如Date.now()
   6. 在reducer中不要直接修改旧的state，应该新建一个副本操作

### 3. Store

1. 定义

   1. 用来联系action与reducer的对象

2. 职责

   1. 维持应用的state
   2. 提供`getState()`来获取state
   3. 提供`dispatch(action)`来更新state
   4. 通过`subscribe(listener)`注册监听器
   5. 通过`subscribe(listener)`返回的函数注销监听器

3. 格式

   ```javascript
   // 根据已有的reducer来创建store
   import {createStore} from 'redux'
   import todoApp from './reducers'
   
   let store = createStore(todoApp)
   
   // 发起action
   store.dispatch(addTodo('Learn about store'))
   ```

   

### 4. 数据流



