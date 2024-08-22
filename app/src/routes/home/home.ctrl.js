"use strict";

const UserStorage = require("../../models/UserStorage");
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
};


// 로그인 인증 기능 구현
const process ={
    login : (req, res) =>{
        const {id, password} = req.body;            // front에서 받은 요청 객체의 id, password를 구조 분해 할당하여 저장
        const response = {};

        const users = UserStorage.getUsers("id", "password");  
       
        // 로그인이 성공한 경우
        if(users.id.includes(id)){                  // users에서 해당 id를 포함하고 있는지 확인
            const idx = users.id.indexOf(id);       // 포함한다면 id의 index 값을 가져옴
            if(users.password[idx] === password ){  // 해당 index값에 있는 password와 입력한 password가 일치한지 확인
                response.success = true;
                return res.json(response);
            }
        }

        // 로그인이 실패한 경우
        response.success = false;     
        response.msg = "로그인에 실패하셨습니다.";     
        return res.json(response);
    },
};
/* 
    Object 형식으로 모듈을 export 
    Object는 {key : value}로 이루어져있다.
    다음과 같이 key 하나만 입력하면 자체적으로 key와 같은 value를 생성한다.
    {
        hello : hello,
        login : login,
    }
*/
module.exports = {
    output,
    process,
};