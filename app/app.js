"use strict"; // js 코드를 더 엄격하게 검사

// 모듈
const express = require("express");
// 모든 OS에서 동일한 환경 변수 등록&가져오기 (사용 전 npm i -s dotenv 필요)
const dotenv = require("dotenv");
dotenv.config();

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

app.use(express.json());                             // JSON 형식의 요청 본문을 파싱
// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 필요한 경우 제대로 인식되지 않는 문제 해결
app.use(express.urlencoded({ extended: false }));    // URL-encoded 형식의 요청 본문을 파싱  

app.use(express.static(`${__dirname}/src/public`));  // 정적 파일 제공 경로 설정
app.use("/", home);                                  // use -> 미들 웨어를 등록해주는 메서드
app.use((req, res, next)=>{                          // 정의된 라우트가 없으면 404 처리
    res.status(404).send('Not Found');
});

module.exports = app;

