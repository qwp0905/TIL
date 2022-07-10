//* 여러 개의 객체들로 구성된 복합 객체와 단일 객체를 클라이언트에서 구별 없이 다루게 해주는 패턴
//* https://gmlwjd9405.github.io/2018/08/10/composite-pattern.html
export class Big {
  private medium: Array<Medium> = []
  constructor(private readonly leader: string) {}

  getNumber() {
    return this.medium.reduce<number>((a, c) => {
      return a + c.getNumber()
    }, 0)
  }

  getLeader() {
    return this.leader
  }

  addMedium(medium: Medium): Big {
    this.medium.push(medium)
    return this
  }
}

export class Medium {
  private small: Array<Small> = []
  constructor(private readonly leader: string) {}

  getNumber() {
    return this.small.reduce<number>((a, c) => {
      return a + c.getNumber()
    }, 0)
  }

  getLeader() {
    return this.leader
  }

  addSmall(small: Small): Medium {
    this.small.push(small)
    return this
  }
}

export class Small {
  private number = 10
  constructor(private readonly leader: string) {}

  getNumber() {
    return this.number
  }
  getLeader() {
    return this.leader
  }
}

const a = new Big('a')
const b = new Medium('b')
const c = new Medium('c')
const d = new Small('d')
const e = new Small('e')
const f = new Small('f')
const g = new Small('g')

c.addSmall(d).addSmall(e)
b.addSmall(f).addSmall(g)
a.addMedium(c).addMedium(b)
console.log(a.getNumber())
console.log(b.getNumber())

console.log(c.getLeader())
console.log(f.getNumber())
