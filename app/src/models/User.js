"use strict"

const UserStorage = require("./UserStorage");

class User  {
    // 생성자 (사용자에게 입력 받은 id, password 저장)
    constructor(body){  
        this.body = body;
    }

    login() {
        const client = this.body;
        const {id , password} = UserStorage.getUserInfo(client.id);

        // id가 존재하는 경우
        if(id) {
            // id & password가 모두 일치한 경우
            if(id === client.id && password === client.password){
                return {success : true};
            }
            // password가 틀린 경우
            return {success : false, msg : "비밀번호가 틀렸습니다."};
        }
        // id가 존재하지 않는 경우
        return {success : false, msg : "존재하지 않는 아이디입니다."};
    }

    register() {
        const client = this.body;
        const response = UserStorage.save(client);   // 입력 받은 정보를 useStorage에 저장
        return response;
    }
}

module.exports =  User;