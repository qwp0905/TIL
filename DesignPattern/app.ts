const abstractCharacterFactory = (function () {
  const jobs: Record<string, Cha> = {}
  return {
    addJobs: (job: string, Character: Cha) => {
      if (Character.prototype.attack) {
        jobs[job] = Character
      }
    },
    create: (job: string, options: { name: string }) => {
      const Character: Cha | undefined = jobs[job]
      return Character ? new Character(options) : null
    }
  }
})()

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

abstractCharacterFactory.addJobs('emperor', Emperor)

const nero: Emperor = abstractCharacterFactory.create('emperor', {
  name: 'nero'
})
nero.proclaim()
new Error()
