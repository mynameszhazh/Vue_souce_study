function stringMatching(words: string[]): string[] {
  words.sort((a,b) => a.length > b.length?-1 : 1)
  let ret: string[] = []
  for(let i=0; i<words.length; i++) {
    for(let j=i; j< words.length; j++) {
      if(words[j].indexOf(words[i]) !== -1) {
        ret.push(words[i])
        break
      }
    }
  }
  return ret
};