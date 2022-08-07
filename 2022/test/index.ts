function exclusiveTime(n: number, logs: string[]): number[] {
  let ret: number[] =  new Array(n).fill(0)
  let stack = []
  for(let i=0; i<logs.length; i++) {
    let log = logs[i]  
    let [index, type, temp] = log.split(':')
    let tempstamp = parseInt(temp)
    if(type == 'start') {
      let len = stack.length
      if(stack.length) {
        ret[stack[len-1][0]] += tempstamp - stack[len-1][1]
      }
      stack.push([index, tempstamp])
    } else {
      let temp = stack.pop()
      ret[temp[0]] += tempstamp - temp[1] + 1
      if(stack.length) {
        stack[stack.length-1][1] = tempstamp + 1
      }
    }
  }
  return ret
};