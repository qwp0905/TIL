function Electronic(brand: 'hyundai' | 'tesla') {
  return function <T extends { new (...arg: any[]): {} }>(constructor: T) {
    return class extends constructor {
      auto = true
      brand = brand
    }
  }
}

function Timer(time: number) {
  return function (target: any, property: any, descripter: any) {
    let origin_method = descripter.value
    descripter.value = function (...arg: any[]) {
      const start = new Date().getTime()
      setTimeout(() => {
        origin_method.apply(this, ...arg)
        const end = new Date().getTime()
        console.log(end - start, 'ms')
      }, time)
    }
  }
}

@Electronic('hyundai')
class Car {
  brand: string
  wheel: 2 | 4
  constructor(brand: string, wheel: 2 | 4) {
    this.brand = brand
    this.wheel = wheel
  }

  @Timer(1000)
  ride() {
    console.log('singsing')
  }
}

const bentz: Car = new Car('bentz', 4)
