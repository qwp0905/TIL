//* 세부적인 과정을 노출시키지 않고 일부만 노출 시키는 패턴
export class Dabbang {
  janjanbary: Array<Janjanbary> = []
  constructor() {
    this.janjanbary = [new Janjanbary(1), new Janjanbary(2), new Janjanbary(3)]
  }
  async attack(target: string) {
    this.janjanbary.forEach((jan) => {
      jan.depart(target)
      jan.run()
      jan.raisehand()
      jan.attack()
    })
  }
}

class Janjanbary {
  constructor(private readonly number: number) {}

  depart(target: string) {
    console.log(`depart to ${target} with ${this.number} janjan`)
  }
  run() {
    const map: Record<number, string> = {
      0: 'fast',
      1: 'slow',
      2: 'moderate'
    }
    for (let i = 0; i < this.number; i++) {
      console.log(`i have ${map[Math.floor(Math.random() * 3)]} speed...`)
    }
  }

  raisehand() {
    console.log(`${this.number} janjans ready...`)
  }

  attack() {
    console.log(`${this.number} janjan attack!!`)
  }
}

const a = new Dabbang()

a.attack('there')
