"use strict";

/* 
    users 테이블을 읽어오기 위해 파일 시스템을 사용한다.
    fs.promises는 fs 모듈의 비동기 메서드들이 promise를 반환하도록 한다.
    promise는 수행하는 동작이 끝남과 동시에 상태를 알려주므로 비동기 처리에 효과적이다.
*/
const fs = require("fs").promises;

// 사용자 정보 저장
class UserStorage {
    static #getUsers(data, isAll, fields) {
        const users = JSON.parse(data);
        if(isAll) return users;   // 모든 사용자 정보 반환

        const newUsers = fields.reduce((newUsers, field) =>{
            // 'hasOwnProperty' 메서드는 객체가 특정 키(속성)를 가지고 있는지 확인
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];  
            }
            return newUsers;
        },{});
            return newUsers;   
    }

    static #getUserInfo(data, id) {
        // Buffer 객체를 문자열로 반환(json 파일을 읽어오기 때문)
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);       // id 배열에서 주어진 id에 해당하는 index 반환
        const userInfo = Object.keys(users).reduce((newUser, info)=>{  // Object.keys(users) => [id, password, name] users의 키 값들로 리스트 구성
            newUser[info] = users[info][idx];
            return newUser;
        },{});
        return userInfo;
    }

    // 사용자 정보 반환 메서드
    static getUsers(isAll, ...fields) { 
        return fs.readFile("./src/databases/users.json")  
        .then((data) => {
             return this.#getUsers(data, isAll, fields);
        })
        .catch(console.err);   
    }

    // 특정 사용자 정보 반환
    static getUserInfo(id) {
        return fs.readFile("./src/databases/users.json")  // promise 반환
        // 파일 읽기가 성공한 경우
        .then((data) => {
             return this.#getUserInfo(data, id);
        })
        // 파일 읽기가 실패한 경우
        .catch(console.err);   
    }

    static async save(userInfo) {
       const users = await this.getUsers(true);
       // 입력한 id가 존재하는 경우
       if (users.id.includes(userInfo.id)){
           throw "이미 존재하는 아이디입니다.";   // error를 객체가 아닌 문자열로 던짐
        }
        users.id.push(userInfo.id);
        users.password.push(userInfo.password);
        users.name.push(userInfo.name);
       // 새로운 사용자 추가
       fs.writeFile("./src/databases/users.json", JSON.stringify(users)); //Object를 JSON 형식의 문자열로 반환
       return {success : true};
    }
}

module.exports =  UserStorage;