// express 모듈 셋팅
const express = require('express')
const app = express()

app.listen(1111)

// 데이터 셋팅
let youtuber1 = {
    channelTitle : "십오야",
    sub : "593만명",
    videoNum : "993개"
}

let youtuber2 = {
    channelTitle : "침착맨",
    sub : "227만명",
    videoNum : "6.6천개"
}

let youtuber3 = {
    channelTitle : "TEO",
    sub : "54.8만명",
    videoNum : "726개"
}

let db = new Map()
var idx = 1

db.set(idx++, youtuber1)
db.set(idx++, youtuber2)
db.set(idx++, youtuber3)

// REST API 설계
// 전체 조회
app.get("/youtubers", function(req, res) {    
    
    let youtubs = Array.from(db.values())
    res.json(youtubs)
})


// 개별 조회
app.get('/youtubers/:id', function(req, res){    
    let {id} = req.params
    id = parseInt(id)
    
    const youtuber = db.get(id)

    if (youtuber == undefined) {
        res.json({
            message : "유튜버 정보를 다시 확인해 주세요."
        })
    } else {


        res.json(youtuber)
    }
})


// 유튜버 정보 등록
app.use(express.json()) // http 외 모듈인 '미들웨어':json 설정
app.post('/youtubers', function(req, res) {
    console.log(req.body)

  // 등록 = db에 저장 = Map(db)에 set
    db.set(idx++, req.body)

    res.json({
        message : `${db.get(idx-1).channelTitle}님 응원합니다~!`
    })
})





/**
 * 기존 유튜버 코드
 * 
 * // express 모듈 셋팅
const express = require('express')
const app = express()

app.listen(1234)

// 데이터 셋팅
let youtuber1 = {
    channelTitle : "십오야",
    sub : "593만명",
    videoNum : "993개"
}

let youtuber2 = {
    channelTitle : "침착맨",
    sub : "227만명",
    videoNum : "6.6천개"
}

let youtuber3 = {
    channelTitle : "TEO",
    sub : "54.8만명",
    videoNum : "726개"
}

let db = new Map()
db.set(1, youtuber1)
db.set(2, youtuber2)
db.set(3, youtuber3)

// REST API 설계
app.get('/youtuber/:id', function(req, res){    
    let {id} = req.params
    id = parseInt(id)
    
    const youtuber = db.get(id)

    if (youtuber == undefined) {
        res.json({
            message : "유튜버 정보를 찾을 수 없습니다."
        })
    } else {


        res.json(youtuber)
    }
})
 */