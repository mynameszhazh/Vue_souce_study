<template>
  <div class="home">
    <!-- <button @click="loginout" v-if="islogin">登出</button> -->
    <img alt="Vue logo" src="../assets/logo.png" />
    <div id="watch-example">
      <!--  加了这个sync同步语法之后就可以在我的子组件中也是用这个东西的操做也是很牛逼的一个操做 -->
      <message ref="msgTitle" name='123'  :show.sync="isshow">
        <template v-slot:start="props">年后：{{ props }}</template>
        <template v-slot:header> 你真的是啥也不是 </template>
        <template v-slot:title>
          <p>咱是个标题这个样子</p>
        </template>
      </message>
      <!-- 我的这个绑定我看到了一些他不应该存在的东西，就是关于一个bind钩子函数是第一次渲染的，后面就不会触发这个操作了，这个我又一次得到了肯定 -->
      <input v-model="title" v-focus />
      <button @click="add" v-permission="admin">添加</button>
      <p></p>
      <!-- <headering :level="1" :title="title" icon="gou">{{ answer }}</headering> -->
      <!-- <headering>{{ answer }}</headering> -->
      <h2 :title="title">
        <svg class="icon">
          <use xlink:href="#icon-gou"></use>
        </svg>
        {{ answer }}
      </h2>
      <ul>
        <li v-for="(item, index) in randomList" :key="index">
          <span style="border: none; margin-right: 10px;">{{item.name}}</span>
          <span style="border: none; margin-right: 10px;">{{item.pirce | editPirce}}</span>
        </li>
      </ul>
    </div>
    <button @click='loginout'>
      注销
    </button>
  </div>
</template>

<script>
// @ is an alias to /src
// 注意了如果使用的是render函数渲染的组件是和其它的组件之间有着不同的数据操作的
// import Headering from '../components/headering.vue'
import Message from '../components/message.vue'
import { getCourseData } from '../api/home/course'
const role = 'admin'
export default {
  name: 'Home',
  provide () {
    return {
      foo: 'fooooooooooo'
    }
  },
  components: {
    Message
  },
  data () {
    return {
      answer: '啥也不是',
      randomList: [],
      title: '',
      isshow: false,
      admin: 'admin',
      // user: {
      //   lastName: 'xjh'
      // },
      name: ' zheshi'
    }
  },
  mounted () {
    // console.log(this.$parent)
  },
  filters: {
    editPirce (val) {
      // console.log(val)
      return '$' + val
    }
  },
  async created () {
    const List = await getCourseData()
    this.randomList = List
  },
  methods: {
    add () {
      this.$refs.msgTitle.names()
      // console.log(this.$refs.msgTitle.names())
      this.$bus.$emit('aaaa')
      this.$toast.show('添加成功', 1500)
      this.isshow = true
    },
    loginout () {
      // console.log(window.sessionStorage.getItem('islogin'))
      window.sessionStorage.setItem('islogin', 'false')
      // this.$router.push('/login')
      // 这个东西的操作真的很不好，就好像是一个页面重新加载一样的玩意，我记得vue里面应该有一个可以实现刷新的东西
      window.location.reload()
      // setTimeout(() => {
      //   this.$toast.show('注销成功！', 1500)
      // }, 3000)
    }
  },
  computed: {
  },
  directives: {
    focus: {
      bind (el) {
        // el.value = 'niaho'
      },
      inserted (el) {
        el.focus()
      }
    },
    permission: {
      inserted (el, binding) {
        if (role !== binding.value) {
          el.parentElement.removeChild(el)
        }
      }
    }
  },
  beforeRouteEnter (to, from, next) {
    // 这个里面是没有this的，有的只有vm的实例
    // 下面如果使用beforeRouteUpdate的话就可以使用this，不过在vue3中都没有this了，用的都是上下文，不过有理解总是一些好的操作不是吗
    next(vm => {
      // console.log(vm)
    })
  }
}
</script>
<style lang="scss" scoped>
.icon {
  /* 这个大小我是学到了一点点的东西的，就是我当前这个文字的大小 */
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.home {
  border: 4px solid gray;
  ::v-deep {
    span {
      border: 3px solid gray;
    }
  }
}

</style>
