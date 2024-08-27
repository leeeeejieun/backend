const fs = require("fs");
// 루트 경로를 가져오는 모듈 (__dirname은 현재 파일의 경로를 가져옴)
const appRoot = require("app-root-path"); // npm i -S app-root-path 설치

// 로그 파일 경로 설정
const accessLogStream = fs.createWriteStream(
    `${appRoot}/log/access.log`,   // app 폴더 내 log 디렉터리 꼭 생성하기
    { flags: 'a' }
);

module.exports = accessLogStream;