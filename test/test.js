let arr1 = []
let subarr1 = [1, 2, 3]
let subarr2 = [3, 4]
let subarr3 = [11, 2, 13]
arr1.push(subarr1,subarr2,subarr3)
let temp = copyArr(arr1)
temp[0].pop()
console.log(temp)
function copyArr(arr) {
  let temp = []
  arr.map(item => {
    temp.push(item.slice(0))
  })
  return temp
}

console.log(arr1)

