/* 
    1. Express 모듈 설치 방법
    Express란 Node.js 모듈 중 하나이며, Node.js상에서 동작하는 웹 개발 프레임워크다.
    $npm install express --save (save 옵션을 통해 package.json 파일에서 설치한 모듈을 편하게 관리할 수 있음)

    2. $node app.js => 서버 가동 
       $ctrl + c    => 서버 종료
*/

// Express 앱 생성
const express = require("express");
const app = express();

/* 
    app.get(주소, 콜백함수)는 특정 주소에 대한 GET 요청이 들어올 때 콜백 함수를 실행하는 메서드다.
    콜백 함수는 req(요청 객체)와 res(응답 객체)를 매개변수로 받아 요청을 처리하고, 응답을 보낸다.
*/
app.get("/",(req, res) =>{
    res.send("루트 화면");
});

app.get("/login", (req,res)=>{
    res.send("로그인 화면");
});

// 3000번 포트에서 HTTP 서버 실행
app.listen(3000, ()=>{
    console.log("서버 가동");
});