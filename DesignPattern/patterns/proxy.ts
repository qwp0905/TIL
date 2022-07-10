//* 프록시는 대리인이라는 뜻으로 사용자가 원하는 행동을 하기 전 거쳐가는 단계
//* 프록시 객체로 캐싱 혹은 에러핸들링을 할 수 도 있지만 사용자의 행동을 왜곡할 수 도 있다.
class Hogu {
  constructor(readonly name: string) {}
  distribution(location: string) {
    console.log(`내 패는 ${location}에서 나왔군....`)
  }
}

export class Tazza {
  target: Hogu
  constructor(target: string) {
    this.target = new Hogu(target)
  }

  distribution(location: string) {
    console.log(`${location}장빼기....`)
    this.target.distribution('위')
  }
}

const t = new Tazza('정마담')
t.distribution('밑')
