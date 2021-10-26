class Father {
  private _foo = 'foooooo'
  protected bar = 'foooooo'
  constructor(public tua = 'tua') {
  }

  private fatherSay() {
    console.log('我是你爸爸')
  }
  say() {
    this.fatherSay()
  }
  get foo() {
    return this._foo
  }
  set foo(newVal) {
    this._foo = newVal
  }
}

class Son extends Father {
  SonSay() {
  }
}

const father = new Father()
// father.say()