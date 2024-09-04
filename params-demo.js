const express = require('express')
const app = express()

app.listen(1234)

// app.get('/:nickname', function(req, res) {

//     const param = req.params

//     res.json({
//         channel : param.nickname
//     })
// })

app.get('/watch', function(req, res) {

    // 객체의 비구조화
    const {v, t} = req.query  // 키값별로 파라미터 넣어줘!
    console.log(v)
    console.log(t)

    res.json({
        video : v,
        timeline : t
    })
})

/** 문자열로 받아지는 n 값 숫자로 바꾸기
 *  app.get('/test/:n', function(req, res) {

 *  let numberr = parseInt(req.params.n) - 10
 *  console.log(number)
 * 
 *  res. json({
 *      num : number
 *  })
 * })
 */


/** 채널 주소 실습 -- req.params 연습
 * 채널 주소 : https://www.youtube.com/@15ya.fulmoon
 * app.get('/:nickname', function(req, res) {

    const param = req.params

    res.json({
        channel : param.nickname
    })
})
 */

/** 영상주소, 타임라인
 * app.get('/watch', function(req, res) {
    const q = req.query  // q = {v:___, t:___}   통째로 넘어감
    console.log(q.v)
    console.log(q.t)
    // v 키값과 t 키값을 넘겨받은 거라고 볼 수 있음

    res.json({
        video : q.v,
        timeline : q.t
    })
})
 */