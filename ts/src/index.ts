import { getFeature } from "./api/index";

// ts 中使用 axios
getFeature().then((res) => {
  let list = res.data;
  for (let i = 0; i < list.length; i++) {
    // console.log(list[i].id)
    // console.log(list[i].name)
  }
});

/**  装饰器的使用 */
function log(Target: Function) {
  console.log(Target == this)
  Target.prototype.log = function() {
    console.log(this.bar)
  }
}


@log
class Bar {
  public name: string;
  bar: string

  constructor(name: string) {
    this.name = name;
    this.bar = '123 bar'
  }
  // 我不加这个就会报错 妈的
  log(){}
}

let bar = new Bar("123");
console.log(bar?.log());


