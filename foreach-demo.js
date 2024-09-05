const arr = [1, 2, 3, 4, 5]

// 콜백함수가 하는일
// 객체 (또는 배열)에서 요소를 하나 꺼낸 다음 불린다. 그다음 더 뭐할거야? 결정해주는 친구
const foreachArr = arr.forEach(function(a, b, c) {
                    // 데이터, 인덱스, 객체 통으로
    console.log(`a : ${a}, b : ${b}, c : ${c}`)
    return a * 2
})


// Map과 foreach
let map = new Map()
map.set(11, "십일")
map.set(123, "백이십삼")
map.set(77, "칠십칠")

map.forEach(function(a, b, c) {
                    // vallue, key, 객체 통
    console.log(`a : ${a}, b : ${b}, c : ${c}`)
})

const mapArr = arr.map(function(a, b, c) {
    // vallue, key, 객체 통
console.log(`a : ${a}, b : ${b}, c : ${c}`)
return a * 2

})

console.log(`foreach : ${foreachArr}, map : ${mapArr}`)
