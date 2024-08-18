"use strict"; // js 코드를 더 엄격하게 검사

// 모듈
const express = require("express");
const app = express();

// 라우팅 
const home = require("./src/routes/home");   // 해당 디렉터리의 위치한 js 파일을 읽어옴


// 템플릿 파일(뷰 파일)들이 위치한 디렉터리 설정 
app.set("views", "./src/views");
/* 
    템플릿 엔진으로 EJS 설정
    뷰 파일의 확장자가 .ejs인 경우, EJS 엔진을 사용해 HTML 템플릿을 렌더링하도록 지정
    ! npm install ejs -S (모듈 설치 필요)
*/
app.set("view engine", "ejs");
  
app.use(express.static(`${__dirname}/src/public`));  // 정적 파일 제공 경로 설정
app.use("/", home);                                  // use -> 미들 웨어를 등록해주는 메서드
app.use((req, res, next)=>{                          // 정의된 라우트가 없으면 404 처리
    res.status(404).send('Not Found');
});

module.exports = app;

