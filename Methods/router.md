### 路由守卫
1.全局前置守卫 router.beforeEach(to,from,next)
2.全局解析守卫 router.beforeResolve(to, from, next)           在导航被确认之前，同时在所有组件内守卫和异步路由组件被解析之后，解析守卫调用

3.路由独享的守卫 router.beforeEnter(to, from, next)

4.组件内的守卫 beforeRouteEnter(to, from, next) 不能访问 this 可以通过传一个回调给 next来访问组件实例。
              beforeRouteUpdate(to, from, next) 
              beforeRouteLeave(to, from, next)

### 完整的导航解析流程
1.导航被触发。
2.在失活的组件里调用 beforeRouteLeave 守卫。
3.调用全局的 beforeEach 守卫。
4.在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。
5.在路由配置里调用 beforeEnter。
6.解析异步路由组件。
7.在被激活的组件里调用 beforeRouteEnter。
8.调用全局的 beforeResolve 守卫 (2.5+)。
9.导航被确认。
10.调用全局的 afterEach 钩子。
11.触发 DOM 更新。
12.调用 beforeRouteEnter 守卫中传给 next 的回调函数，创建好的组件实例会作为回调函数的参数传入。