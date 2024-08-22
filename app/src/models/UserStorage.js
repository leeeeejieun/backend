"use strict";

// 사용자 정보 저장
class UserStorage {
    static #users = {   // private static 변수로 설정 (정적 메서드는 인스턴스 필드에 접근 불가하기 때문) 
    id: ["jieun","yejun","bamby"],
    password : ["1109","1234","5678"],
    name: ["이지은","남예준","채봉구"],
    };

    // 사용자 정보 반환 메서드
    static getUsers(...fields) {   // 가변 매개변수

    /* newUsers는 처음에 초기값으로 설정된 빈 객체 {}를 가지며,
       각 순회마다 누적된 결과가 newUsers에 저장된다.
       field는 fields 배열의 현재 요소를 나타낸다.
    */
    const newUsers = fields.reduce((newUsers, field) =>{
        const users = this.#users;
        // 'hasOwnProperty' 메서드는 객체가 특정 키(속성)를 가지고 있는지 확인
        if(users.hasOwnProperty(field)){
            newUsers[field] = users[field];  // newUsers에 filed 속성&값 추가
        }
        return newUsers;
    },{}); // 초기값을 빈 객체로 설정
        return newUsers;   
    }

    // 특정 사용자 정보 반환
    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);       // id 배열에서 주어진 id에 해당하는 index 반환
        // Object.keys(users) => [id, password, name] users의 키 값들로 리스트 구성
        const userInfo = Object.keys(users).reduce((newUser, info)=>{
            newUser[info] = users[info][idx];
            return newUser;
        },{});
        return userInfo
    }
}

module.exports =  UserStorage;