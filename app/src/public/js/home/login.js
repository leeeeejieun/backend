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
    }).then((res)=> res.json())     // fetch는 response 객체를 반환 , res.json()은 이 응답을 JSON으로 파싱하는 promise를 반환
      .then((data) => {             // JSON 객체로 파싱된 응답 데이터  
        if(data.success){           // 로그인 성공 시 '/'로 이동
            location.href = "/";
        } else{
            alert(data.msg);        
        }
      })
      .catch((err)=>{               // 에러 처리
        console.error(new Error("로그인 중 에러 발생"));  // 새로운 에러 객체 생성 및 출력
      })      
}