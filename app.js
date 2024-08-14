// 내장 모듈 (npm으로 따로 다운로드할 필요 X)
const http = require("http");
const app = http.createServer((req, res)=>{
    console.log(req.url);  // client가 요청하는 url 확인 가능
    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});  // 한글 깨짐 해결 방법
    // Express와 달리 if문을 이용해 url에 따른 응답을 설정해야함 ( 코드 가독성 떨어짐 )
    if(req.url === "/"){
        res.end("/ 페이지");  // 한글 깨짐 현상 발생
    }
    else if(req.url === "/login"){
        res.end("/login page");
    }
});


app.listen(3001, ()=>{
    console.log("http 서버 가동");
})