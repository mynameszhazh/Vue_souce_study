# router

## 基础知识

## 扩展

### 子路由改变的监听

- 通过 `watch` 监听 `$route` 的改变，然后去进行二次的操作的行为
- 看主要示例

```js
watch: {
  $route: {
    immediate: true,
    deep: true,
    handler() {
      // handle something
      console.log('router, change')
    }
  }
},
```

### vue2 改变路由的方式

- 通过 `$router.push`
- 其实日常开发中，只需要使用其中的一个完全就可以很好的使用了

### 路由的切换动画

- 主要思路就是使用 `transform` 很好用的一个东西了

```js
<transition>
  <keep-alive :include="['a', 'b']">
  //或include="a,b" :include="/a|b/",a 和 b 表示组件的 name
  //因为有些页面,如试试数据统计,要实时刷新,所以就不需要缓存
    <router-view/> //路由标签
  </keep-alive>
  <router-view exclude="c"/>
  // c 表示组件的 name值
</transition>
```
### 路由key绑定

- 有些东西的改变就是不会重新执行组件的生成， /1 => /2, ?id=1 => ?id=2
- 解决方案
```vue
<router-view :key='$route.fullPath'></router-view>
```
- 这样可以，每次都会重新进行组件创建
- 注意在 `keep-alive` , 就算是有 key 也是不会执行的 
