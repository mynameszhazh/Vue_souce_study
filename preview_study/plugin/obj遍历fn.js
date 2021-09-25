const obj = {
  add () {
    return 2
  },
  num () {
    return 'num'
  },
  age () {
    return 'age'
  }
}

// 这个遍历也是不能得到一个函数的
// array.from 这个东西可以把一个可迭代的东西转换成数组 这个东西就先别想了把
console.log(Array.from(obj));

