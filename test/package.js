
function packageMaxValue(weight, value, size){
  // 省略参数合法性校验
  let bagMatrix = []
  for(let w = 0; w <= size; w++) {
      // js不能直接创建二维数组，所以在此初始化数组
      bagMatrix[w] = []
      for (let j = 0; j < weight.length; j++) {
          // 背包的容量为0，那么一个东西也装不下，此时的值肯定也是为0
          if(w === 0) {
              bagMatrix[w][j] = 0
              continue
          }
          // 背包的容量小于物品j的重量，那么就没有上述情况了
          if(w < weight[j]){
              bagMatrix[w][j] = bagMatrix[w][j-1] || 0
              continue
          }
          bagMatrix[w][j] = Math.max((bagMatrix[w-weight[j]][j-1] || 0) + value[j], bagMatrix[w][j-1] || 0)
      }
  }
  return bagMatrix
}

let weight = [1,2,3,4]
let value = [2,4,4,5]

console.log(packageMaxValue(weight, value, 5))