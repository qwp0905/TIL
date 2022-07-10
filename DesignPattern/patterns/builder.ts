/**
 * 옵션들이 많을 때 사용한다. 마치 로봇 조립같이
 */
class Army {
  constructor(
    private readonly leader: string,
    private readonly army: number,
    private readonly region: string
  ) {}
  public attack(target: Army) {
    console.log(
      `${this.leader}/${this.region} attack  ${target.leader}/${target.region} with ${this.army} army`
    )
  }
}

export class ArmyBuilder {
  private army = 0
  private region = 'global'
  constructor(private readonly leader: string) {}

  setArmy(army: number): ArmyBuilder {
    this.army = army
    return this
  }

  setRegion(region: string): ArmyBuilder {
    this.region = region
    return this
  }

  build(): Army {
    return new Army(this.leader, this.army, this.region)
  }
}

const A = new ArmyBuilder('me').setArmy(100).setRegion('a').build()

const B = new ArmyBuilder('you').setArmy(1).build()

A.attack(B)
