
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function getResult(nums, k, buff, ret) {
    if (buff.length > 1) {
        let temp = []
        for (let i = 0; i < buff.length; i++) {
            temp.push(buff[i])
        }
        ret.push(temp)
    }
    buff.push(0)
    let map = new Map()
    for (let i = k; i < nums.length; i++) {
        if (map.get(nums[i])) continue
        if (buff.length == 1 || nums[i] >= buff[buff.length - 2]) {
            buff[buff.length - 1] = nums[i]
            map.set(nums[i], 1)
            let temp = new Array()
            for (let i = 0; i < buff.length; i++) {
                temp.push(buff[i])
            }
            getResult(nums, i + 1, temp, ret)
        }
    }
    return
}
var findSubsequences = function (nums) {
    let ret = []
    getResult(nums, 0, [], ret)
    console.log(ret);
    return ret
};

findSubsequences([4, 6, 7, 7])