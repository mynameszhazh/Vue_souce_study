function distanceBetweenBusStops(distance: number[], start: number, destination: number): number {
  // 没有想象中的那么容易
  if(destination > start) {
    let temp = destination 
    destination = start
    start = temp
  }
  let ret = 0
  let sum = 0
  for(let i= start; i<distance.length; i++)  {
    if(i < destination) {
      ret += distance[i]
      sum += distance[i]
    } else {
      sum += distance[i]
    }
  }
  return Math.min(ret, sum - ret)
};