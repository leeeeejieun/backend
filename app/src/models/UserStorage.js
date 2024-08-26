"use strict";

// DB 모듈 불러오기
const db = require("../config/db");

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

    // 사용자 정보 반환
    static getUsers(isAll, ...fields) { 
          
    }

    // 특정 사용자 정보 반환
    static getUserInfo(id) {
        // getUserInfo가 결과값을 반환할 수 있도록 promise 객체 생성
        return new Promise((resolve, reject) =>{
            db.query("SELECT * FROM users WHERE id = ?", [id] , (err, data) => {
                if(err) {
                    reject(err); // 쿼리 실행 중 에러가 발생하면 reject 실행
                }
    
                // data가 배열로 반환되기 때문에 첫 번째 값을 반환하도록 지정
                resolve(data[0]);  // 쿼리 성공 시 data 반환
            });
        });
    }

    // DB에 새로운 사용자 등록
    static async save(userInfo) {
    
    }
}

module.exports =  UserStorage;