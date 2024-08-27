"use strict"; // js 코드를 더 엄격하게 검사

// 모듈
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

const app = express();
dotenv.config();

const accessLogStream = require("./src/config/log");

// 라우팅 
const home = require("./src/routes/home");   // 해당 디렉터리의 위치한 js 파일을 읽어옴

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.json());                             // JSON 형식의 요청 본문을 파싱
// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 필요한 경우 제대로 인식되지 않는 문제 해결
app.use(express.urlencoded({ extended: false }));    // URL-encoded 형식의 요청 본문을 파싱  

app.use(express.static(`${__dirname}/src/public`));  // 정적 파일 제공 경로 설정
// 로그를 스트림을 통해 처리하여 app/log/access.log 파일에 저장
app.use(morgan("dev"));
app.use(morgan("common",{ stream: accessLogStream }));
app.use("/", home);                                 
app.use((req, res, next)=>{                         
});

module.exports = app;

