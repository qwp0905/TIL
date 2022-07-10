//* 특정 조건이 될 때 까지 특정 동작을 반복해야하는 경우
export class Bisil {
  strength = 5
  pushUp() {
    this.strength++
    console.log(`비실이의 푸시업...힘 ${this.strength}....`)
  }
  Tungtung() {
    return this.strength === 20
  }
  training() {
    while (!this.Tungtung()) {
      console.log('아직 퉁퉁이를 이길 수 없다...')
      this.pushUp()
    }
    console.log('이제 밥이지')
  }
}

const bisil = new Bisil()

bisil.training()
