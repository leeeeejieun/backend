// mysql 연결 전 모듈 설치 필요 npm i -s mysql

const mysql = require("mysql");

// DB 연결 설정
const db  = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

// 위의 내용을 기반으로 DB 연결 요청
db.connect();

module.exports = db;