import Vue from 'vue'
import { AxiosInstance } from 'axios';
import VueRouter from 'vue-router';
import {Store} from 'vuex';


declare module '*.vue' {
  export default Vue
}

declare module 'vue/types/vue' {
  // 在我的全局Vue上面添加一些东西
  interface Vue {
    $axios: AxiosInstance
  }
}

declare module 'vue/types/options' {
  // 在我的全局Vue上面添加一些东西
  interface componentOptions {
    router: VueRouter;
    store?: Store<any>;
  }
}
