//* 어떠한 동작의 처리를 자신이 할 지 다음으로 넘길 지 결정하는 구조
abstract class Person {
  constructor(readonly name: string, readonly strength: number) {}
  canDo(target: number) {
    return this.strength >= target ? true : false
  }
  do() {
    console.log(`${this.name}이 번쩍 들었다!`)
  }
}

export class Yakgol extends Person {
  constructor(name: string) {
    super(name, 5)
  }
}
export class General extends Person {
  constructor(name: string) {
    super(name, 10)
  }
}
export class StrongMan extends Person {
  constructor(name: string) {
    super(name, 20)
  }
}

export class AbleToUp {
  constructor(private readonly list: Array<Person>) {}

  doit(target: number) {
    for (const p of this.list) {
      if (p.canDo(target)) {
        return p.do()
      }
    }
    console.log('할 사람이 없다....')
  }
}

const a = new Yakgol('비실이')
const b = new General('노진구')
const c = new StrongMan('퉁퉁이')
const d = new AbleToUp([a, b, c])
d.doit(50)
