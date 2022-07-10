/**
 * 기존 구조를 새 구조로 유연하게 전환하고 기존 구조로 전환하는데 사용
 */
export class System {
  constructor(private readonly adapter: Adapter) {}

  public vote() {
    return this.adapter.vote()
  }
}

export type Adapter = {
  vote: () => void
}

const a_adapter: Adapter = {
  vote() {
    console.log(`vote a`)
  }
}

const b_adapter: Adapter = {
  vote() {
    console.log('vote b')
  }
}

const ASystem = new System(a_adapter)
ASystem.vote()
const BSystem = new System(a_adapter)
BSystem.vote()
