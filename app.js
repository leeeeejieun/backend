// Express 앱 생성
const express = require("express");
const app = express();

/* 
    app.get(주소, 콜백함수)는 특정 주소에 대한 GET 요청이 들어올 때 콜백 함수를 실행하는 메서드다.
    콜백 함수는 req(요청 객체)와 res(응답 객체)를 매개변수로 받아 요청을 처리하고, 응답을 보낸다.
*/

/* 
   ! 서버 코드 내부에 HTML을 직접 작성하여 클라이언트에게 응답으로 보내는 하드코딩 방식
    단점은 다음과 같다.
    1. 유지보수 어려움 : HTML 구조&내용 변경할 때마다 서버 코드를 수정해야 한다.
    2. 재사용성 부족 : 다른 경로에서 동일한 HTML을 사용하려면 중복된 코드를 작성해야 한다.
    3. 확장성 문제: 코드가 복잡해지거나 여러 페이지가 필요한 경우 관리하기가 어렵다.
*/
app.get("/login",(req, res) =>{
    res.send(`
        <!DOCTYPE html>
        <html lang="ko">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <input type="text" placeholder="아이디"><br>
            <input type="text" placeholder="비밀번호"><br>
            <button>로그인</button>
        </body>
        </html>
    `);
});

app.get("/", (req,res)=>{
    res.send(`
        <!DOCTYPE html>
        <html lang="ko">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            루트 페이지 입니다.
        </body>
        </html>
    `);
});

// 3000번 포트에서 HTTP 서버 실행
app.listen(3000, ()=>{
    console.log("서버 가동");
});