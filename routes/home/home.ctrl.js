"use strict";

/* 
    Controller : MVC(Model-View-Controller) 패턴의 구성 요소 중 하나로,
    사용자로부터 받은 요청을 처리한 후, 그에 대한 응답을 반환하는 역할을 한다.
    ! route에서 직접 작성하던 콜백 함수를 컨트롤러로 분리하여 모듈화 할 시,
      코드의 재사용성 & 유지보수성이 향상되는 장점이 있다.
*/
const hello = (req, res) => {
    res.render("home/index"); // ../views/home/index.ejs 파일 렌더링
}

const login = (req, res) => {
    res.render("home/login");
}

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
    hello,
    login,
};