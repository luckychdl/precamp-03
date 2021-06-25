const classmate = ['철수','영희','훈이']
// undefined
classmate.length
// 3
const ages = [8,9,10]
// undefined
classmate.push('맹구')
// 4
classmate
// (4) ["철수", "영희", "훈이", "맹구"]
classmate.pop()
// "맹구"
classmate
// (3) ["철수", "영희", "훈이"]
classmate.includes('철수')
// true
classmate.includes('맹구')
// false

const fruits = [
  { number: 1, title: "레드향" },
  { number: 2, title: "샤인머스켓" },
  { number: 3, title: "산청딸기" },
  { number: 4, title: "한라봉" },
  { number: 5, title: "사과" },
  { number: 6, title: "애플망고" },
  { number: 7, title: "딸기" },
  { number: 8, title: "천혜향" },
  { number: 9, title: "과일선물세트" },
  { number: 10, title: "귤" },
]

fruits[0].number + ' ' + fruits[0].title
"1 레드향"
fruits[1].number + ' ' + fruits[1].title
"2 샤인머스켓"
fruits[2].number + ' ' + fruits[2].title
"3 산청딸기"
fruits[3].number + ' ' + fruits[3].title
"4 한라봉"
fruits[4].number + ' ' + fruits[4].title
"5 사과"
fruits[5].number + ' ' + fruits[5].title
"6 애플망고"
fruits[6].number + ' ' + fruits[6].title
"7 딸기"
fruits[7].number + ' ' + fruits[7].title
"8 천혜향"
fruits[8].number + ' ' + fruits[8].title
"9 과일선물세트"
fruits[9].number + ' ' + fruits[9].title
"10 귤"

for (let i = 0; i <fruits.length; i ++){
  console.log(fruits[i].number + '. ' + fruits[i].title)
}
// 1. 레드향
// 2. 샤인머스켓
// 3. 산청딸기
// 4. 한라봉
// 5. 사과
// 6. 애플망고
// 7. 딸기
// 8. 천혜향
// 9. 과일선물세트
// 10. 귤

const profile1 = {
  name: '철수',
  age: 12,
  school: '다람쥐초등학교'
} 

if (profile1.age >= 20){
  console.log('성인입니다')
} else if (profile1.age >= 8) {
  console.log('학생입니다')
} else {
  console.log('어린이 입니다')
} 
// 학생입니다

function boolean(input1, input2) {
  if (input1 === false && input2 === false ) {
    console.log(false)
  } else {
    console.log(true)
  }
}

// 인증번호 생성
const token = String(Math.floor(Math.random() * 1000000)).padStart(6,'0')
