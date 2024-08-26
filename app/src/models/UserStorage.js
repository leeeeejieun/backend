"use strict";

// DB 모듈 불러오기
const db = require("../config/db");

// 사용자 정보 저장
class UserStorage {
 
    // 특정 사용자 정보 반환
    static getUserInfo(id) {
        // getUserInfo가 결과값을 반환할 수 있도록 promise 객체 생성
        return new Promise((resolve, reject) =>{
            const query = "SELECT * FROM users WHERE id = ?;"
            db.query(query, [id] , (err, data) => {
                if(err)  reject(`${err}`); // 쿼리 실행 중 에러가 발생하면 reject 실행
                
                // data가 배열로 반환되기 때문에 첫 번째 값을 반환하도록 지정
                resolve(data[0]);  // 쿼리 성공 시 data 반환
            });
        });
    }

    // DB에 새로운 사용자 등록
    static async save(userInfo) {
        return new Promise((resolve, reject) =>{
            const query = "INSERT INTO users(id, name, password) VALUES(?, ?, ?);"
            db.query(query, [userInfo.id, userInfo.name, userInfo.password] , 
                (err) => {
                if(err) {
                    reject(`${err}`); // 객체가 아닌 문자열로 던짐
                }
                resolve({success : true});  
            });
        });
    }
}

module.exports =  UserStorage;