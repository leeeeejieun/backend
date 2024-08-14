// Express 앱 생성
const express = require("express");
const app = express();

/* 
    app.get(주소, 콜백함수)는 특정 주소에 대한 GET 요청이 들어올 때 콜백 함수를 실행하는 메서드다.
    콜백 함수는 req(요청 객체)와 res(응답 객체)를 매개변수로 받아 요청을 처리하고, 응답을 보낸다.
*/

// 템플릿 파일(뷰 파일)들이 위치한 디렉터리 설정 
app.set("views", "./views");
/* 
    템플릿 엔진으로 EJS 설정
    뷰 파일의 확장자가 .ejs인 경우, EJS 엔진을 사용해 HTML 템플릿을 렌더링하도록 지정
    ! npm install ejs -S 모듈 설치 필요
*/
app.set("view engine", "ejs");

// "/" 경로로 GET 요청이 들어오면 index.ejs 템플릿을 렌더링
app.get("/", (req, res)=>{
    res.render("home/index");
});

app.get("/login",(req, res) =>{
    res.render("home/login");
});

// 3000번 포트에서 HTTP 서버 실행
app.listen(3000, ()=>{
    console.log("서버 가동");
});