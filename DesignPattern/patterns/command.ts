//* Head라는 사용자가 특정 행동을 하면(ex approve) Commander객체가 해당 명령을 수행
//* 명령은 Strategy 객체가 독립적으로 관리
export class Head {
  approve(commander: Commander) {
    commander.execute()
  }
}

export class Commander {
  commands: Array<() => void> = []

  execute() {
    this.commands.forEach((command) => {
      command()
    })
  }

  do(command: (...arg: any) => void, ...arg: any) {
    this.commands.push(() => {
      command.call(null, arg)
    })
  }

  undo() {
    this.commands.pop()
  }
}

export const Strategy: Record<string, (...arg: any) => void> = {
  get(target: string) {
    console.log(`get ${target}`)
  },
  go(target: string) {
    console.log(`go ${target}`)
  },
  leave() {
    console.log(`leave here`)
  }
}

const a = new Head()

const c = new Commander()

c.do(Strategy.go, 'there')
c.do(Strategy.go, 'danger')
c.undo()
c.do(Strategy.go, 'safe')
c.do(Strategy.get, 'sword')
c.do(Strategy.leave)
a.approve(c)
