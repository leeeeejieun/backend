"use strict"
const app = require("../app");

const PORT = process.env.PORT || 3000;

/*
    서버를 가동하는 명령어가 해당 파일에 위치해 있으므로,
    node app.js(x) => node ./bin/www.js(o) 로 실행시켜야 한다.
*/
app.listen(PORT, ()=>{
    console.log("서버 가동");
});