/**
 * 같은 속성을 공유하는 객체를 여러개 만들어야 할때 사용
 */

// const abstractCharacterFactory = (() => {
//   const jobs: Record<string, Cha> = {}
//   return {
//     addJobs: (job: string, Character: Cha) => {
//       if (Character.prototype.attack) {
//         jobs[job] = Character
//       }
//     },
//     create: (job: string, options: { name: string }) => {
//       const Character: Cha | undefined = jobs[job]
//       return Character ? new Character(options) : null
//     }
//   }
// })()

class Factory {
  private jobs: Record<string, Cha> = {}
  addJobs(job: string, Character: Cha) {
    if (Character.prototype.attack) {
      this.jobs[job] = Character
    }
  }
  create(job: string, options: { name: string }) {
    const Charactor = this.jobs[job]
    return new Charactor(options)
  }
}

type Cha = new (options: { name: string }) => any

class Emperor {
  name: string
  constructor({ name }: { name: string }) {
    this.name = name
  }
  attack(target: string) {
    console.log(`${this.name} => ${target} attack!!`)
  }
  proclaim() {
    console.log(`${this.name} hi`)
  }
}

const abstractCharacterFactory = new Factory()

abstractCharacterFactory.addJobs('emperor', Emperor)

const nero: Emperor = abstractCharacterFactory.create('emperor', {
  name: 'nero'
})
nero.proclaim()
