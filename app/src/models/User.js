"use strict"

const UserStorage = require("./UserStorage");

class User  {
    // 생성자 (사용자에게 입력 받은 id, password 저장)
    constructor(body){  
        this.body = body;
    }

    async login() {
        const client = this.body;
        // getUserInfo의 작업이 끝날 때까지 기다림 (다른 작업을 실행X)
        const { id, password } = await UserStorage.getUserInfo(client.id);

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

    async register() {
        const client = this.body;
        // 기존에 있는 id로 회원 가입 시 발생하는 에러를 해당 메서드에서 처리  
        try {
            const response = await UserStorage.save(client); 
            return response;
        }catch(err){
            return { success : false, msg : err };  
        }
    }
}

module.exports =  User;