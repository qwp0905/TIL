//* 객체들은 하나의 프로토타입을 공유하므로 여러번 선언되지않는다. 생성자에 있으면 선언할때마다 생성된다.
export class Soldier {
  public hp = 50
  private att = 5
  constructor(private readonly name: string) {}

  attack(target: Soldier) {
    console.log(`${this.name} attack ${target.name}`)
    target.hit(this.att)
    console.log(`${target.name} left ${target.hp}`)
  }

  hit(att: number) {
    this.hp -= att
  }
}

const a = new Soldier('a')
const b = new Soldier('b')

a.attack(b)
