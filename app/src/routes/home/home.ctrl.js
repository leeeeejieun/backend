"use strict";

const User = require("../../models/User");
/* 
    Controller : MVC(Model-View-Controller) 패턴의 구성 요소 중 하나로,
    사용자로부터 받은 요청을 처리한 후, 그에 대한 응답을 반환하는 역할을 한다.
    ! route에서 직접 작성하던 콜백 함수를 컨트롤러로 분리하여 모듈화 할 시,
      코드의 재사용성 & 유지보수성이 향상되는 장점이 있다.
*/

const output = {
    home : (req, res) => {
        res.render("home/index"); // ../views/home/index.ejs 파일 렌더링
    },
    login : (req, res) => {
        res.render("home/login");
    },
    register : (req, res) =>{
        res.render("home/register");
    }
};


// 로그인 인증 기능 구현
const process ={
    login : (req, res) =>{
    const user = new User(req.body); 
    const response = user.login();
    return res.json(response);
    },
    register : (req, res) =>{
        const user = new User(req.body); 
        const response = user.register();
        return res.json(response);
        },
};

module.exports = {
    output,
    process,
};