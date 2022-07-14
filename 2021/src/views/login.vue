<template>
  <div>
    <h1>login page</h1>
    <k-form :model="userinfo" :rules="rules" ref="kform">
      <kFormItem v-show="!islogin" label='姓名' prop='username'>
        <kinput v-model="userinfo.username" placeholder='请输入姓名' name='xjh'></kinput>
      </kFormItem>
      <kFormItem v-show="!islogin" label='密码' prop='password'>
        <kinput v-model="userinfo.password" type='password' placeholder='请输入密码'></kinput>
      </kFormItem>
      <k-form-item>
        <button @click="login" v-if="!islogin">登录</button>
        <button @click="logout" v-else>注销</button>
      </k-form-item>
    </k-form>
  </div>
</template>

<script>
import kinput from '../components/kelement/kinput.vue'
import kFormItem from '../components/kelement/kFormItem.vue'
import kForm from '../components/kelement/kForm.vue'
export default {
  name: 'login',
  data () {
    return {
      userinfo: {
        username: '',
        password: ''
      },
      rules: {
        username: {
          required: true,
          msg: '请输入用户名!!'
        },
        password: [
          {
            required: true,
            msg: '请输入密码!!'
          }
        ]
      }
    }
  },
  components: {
    kinput,
    kFormItem,
    kForm
  },
  methods: {
    login () {
      this.$refs.kform.validate(valid => {
        // console.log(valid)
        if (valid) {
          window.sessionStorage.setItem('islogin', 'true')
          // window.islogin = true
          // this.$router.addRoutes([
          //   {
          //     path: '/home',
          //     name: 'Home',
          //     component: () => import('../views/Home.vue'),
          //     meta: {
          //       auto: true
          //     }
          //   }
          // ])
          this.$toast.show('登录成功!', 3000)
          this.$router.push(this.$route.query.redirect)
        } else {
          // console.error('submit error!!')
          // 这里注意的notice组件名字使用还是很牛的
          const com = this.$notice({
            title: 'nihao',
            message: '老子叫捡回',
            duration: 3000
          })
          com.show()
        }
      })
    },
    logout () {
      // 注意这里的页面不会保存到下一次刷新，这个肯定是不行的就需要一些很好的处理，才能解决一些问题这个是一个必须的操作
      window.sessionStorage.setItem('islogin', 'false')
      // window.islogin = false
      // 就回到我的首页，然后就是因为首页就回到了登录页，这样岂不是很牛逼的操作
      // 这个东西真的很哪里
      // this.$toast.show('注销成功', 1500)
      window.location.reload()
      // this.$nextTick(() => {
      // })
    }
  },
  computed: {
    islogin () {
      // eslint-disable-next-line no-return-assign
      return window.sessionStorage.getItem('islogin') !== 'false'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
