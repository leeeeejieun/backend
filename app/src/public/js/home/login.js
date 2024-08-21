"use strict"

const id = document.querySelector("#id"),
    password = document.querySelector("#password"),
    loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login)

async function login() {
    const req = {
        id : id.value,
        password : password.value,
    }
    
    await fetch("/login",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    }).then((res)=> res.json())   // fetch는 response 객체를 반환 , res.json()은 이 응답을 JSON으로 파싱하는 promise를 반환
      .then((data)=> console.log(data));       // JSON 객체로 파싱된 응답 데이터
}