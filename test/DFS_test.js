/**
 * 背包问题
 * @param {物品数量} n 
 * @param {背包体积} m 
 * @param {单个物品体积大小 数组} v 
 * @param {单个物品的价值 数组} w 
 */
function maxValue(n, m, v, w) {
  let f = []
  for (let j=0; j<=m ; j++) {
    f[j] = []
  }
  for (let i=1; i<=n ; i++) {
    for (let j=0; j<=m ; j++) {
      f[i][j] = f[i-1][j]
      if(j >= v[i]) {
        f[i][j] = Math.max(f[i][j], f[i-1][j-v[i-1]]+ w[i-1])
      }
    }
  }
  return f
}

let a = maxValue(4,5, [1,2,3,4], [1,4,4,5])
console.log(a)


