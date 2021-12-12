/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
 var findOrder = function(numCourses, prerequisites) {
    let indeg = new Array(numCourses).fill(0)
    let p = [], q = []
    for(let i=0; i<numCourses; i++)  p[i] = new Array()
    for(let item of prerequisites) {
        indeg[item[0]]++
        p[item[1]].push(item[0])
    }
    for(let i=0; i<numCourses; i++) if(indeg[i] == 0) q.unshift(i)
    let arr  = []
    while(q.length) {
        let ind = q.pop()
        arr.push(ind)
        // for(let i=0; i<p[ind].length; i++) {
        //     indeg[p[ind][i]] -= 1
        //     if(indeg[p[ind][i]] == 0) q.unshift(p[ind][i])
        // }
        for(let to of p[ind]) {
            indeg[to] -= 1
            if(indeg[to] == 0) q.unshift(to)
        }
    }
    console.log(arr)
    if(arr.length == numCourses) return arr
    return []
};

findOrder(4,
    [[1,0],[2,0],[3,1],[3,2]])