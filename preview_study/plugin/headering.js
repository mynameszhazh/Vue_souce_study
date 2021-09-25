const myPlugin = {
  install(Vue, options) {
    Vue.component("headerindg", {
      // 这个的操作还是很简单的一个操作，这个vue的操作还是存在很多项目之中，这个vue3再怎么说也只有在之后才能进行一个
      functional: true,
      render(h, content) {
        // 子节点的一些操作这个才对是不是
        const { icon, title, level } = content.props
        let children = [];
        // 如果你想用到一个render函数来进行一个函数的操作的话就是需要这样的一个操作，这个东西可能你可以使用到也说不定。。
        if (icon) {
          children.push(
            h(
              "svg",
              // 这个操作我不是很懂，估计就是一个attrs的一个语法糖这个样子的解释还是很好的
              { class: "icon" },
              // 这个标签的使用还是有一个子属性这个样子的就是一个套娃一样的操作就完事了，这样的操作之后就可以得到很好的一个验证这个样子的操作了
              // 注意了，这个children的最原始的操作就是一个数组一样的操作也是可以的，就像是一个
              [
                h(
                  "use",
                  // <use xlink:href="#icon-gou"></use>
                  { attrs: { "xlink:href": "#icon-" + icon } }
                ),
              ]
            )
          );
        }
        children = children.concat(content.children);
        // 这个render函数里面东西非常多的一个操作的，一开始是一个等级的事情这样子，然后就是关于这个插槽中的一些操作这个也是一个必须的操作了
        // 这个参数里面选择的数据模式是非常多的，可以是一个函数组件之类的操作，这个也是一个必须的操作没有办法
        let vnode = h(
          "h" + level,
          //  这个参数的作用也很明显了，就是在我上面的标签不作用的时候，也能传递的一些个属性的内容
          { attrs: { title, name: "xjh" } },
          //  这个标签的作用就是一个我在我的标签中写一些东西的使用可以使用的一些个操作，{{}}这样的操作还是很明显得一个操作
          // 这个东西就是一个children 如果知道这个的时候，就能更加理解这个render函数的操作了，这个操作肯定是没有上面问题的一个操作
          children
        );
        console.log(vnode);
        return vnode;
      },
    })
  }
}

if(typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(myPlugin)
}