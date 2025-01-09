import MockSVG from "mock-svg"
import Mock from "mockjs"

export default Mock.mock({
  'libs|5': [
    {
      name: '@word',
      link: '@url',
      icon: ()=>MockSVG.generate({text:Mock.Random.word()})
    },
  ],
})