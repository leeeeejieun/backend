"use strict";

const form = document.querySelector("form");
form.addEventListener("submit", onSubmit);

// submit 시 페이지가 리렌더링 되는 것을 막음
function onSubmit (event) {
    event.preventDefault();
}
