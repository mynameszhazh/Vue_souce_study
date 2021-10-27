import Vue  from 'vue';
import {Component} from 'vue-property-decorator';

@Component({
  
})
export default class MyMixin extends Vue {
  created () {
    console.log( 'this is a minxin log');
  }
}