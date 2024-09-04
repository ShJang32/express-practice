// 자바스크립트 배열의 비구조화  --  인덱스 값을 가지고 있기 때문에 순서대로 들어간다. 배열의 중간에 공백을 넣어서 원하는 인덱스 값을 얻는다.

const array = [1, 2, 3, 4, 5]
const [ , num2, num3, , num5] = array

console.log(num2)
console.log(num3)
console.log(num5)

// const num1 = array[0]
// const num4 = array[3]

// console.log(num1)
// console.log(num4)


/** 기존 코드 --  비구조화 전
 * const array = [1, 2, 3, 4, 5]

const num1 = array[0]
const num4 = array[3]

console.log(num1)
console.log(num4)
 */